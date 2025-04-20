import { NextResponse } from 'next/server'        // ou 'next'
import Brevo from '@getbrevo/brevo'

const apiInstance = new Brevo.ContactsApi()
apiInstance.setApiKey(
  Brevo.ContactsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: CORS })
}

export async function POST(request) {
  try {
    const { email, firstName, lastName } = await request.json()
    console.log('→ Received payload:', { email, firstName, lastName })

    const listIdRaw = process.env.BREVO_LIST_ID
    const listId = parseInt(listIdRaw, 10)
    if (isNaN(listId)) {
      console.error('❌ Invalid listId:', listIdRaw)
      return NextResponse.json({ success: false, error: 'Invalid LIST_ID' }, {
        status: 400, headers: CORS
      })
    }

    const toCreate = new Brevo.CreateContact()
    toCreate.email = email
    toCreate.listIds = [listId]
    toCreate.attributes = { PRENOM: firstName, NOM: lastName }

    // 1) On appelle réellement Brevo
    const resp = await apiInstance.createContact(toCreate)
    console.log('← Brevo response:', resp)

    return NextResponse.json(
      { success: true, data: resp },
      { status: 200, headers: CORS }
    )
  } catch (err) {
    console.error('🚨 Brevo error:', err)
    return NextResponse.json(
      { success: false, message: err.message || 'Internal Error' },
      { status: 500, headers: CORS }
    )
  }
}
