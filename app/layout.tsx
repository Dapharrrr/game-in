import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game'in",
  description: "",
  icons: {
    icon: [{ url: "/Icone Nav_Blanc.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Icone Nav_Blanc.png" />
        <Script id="piwikpro-tag-manager" strategy="afterInteractive">
          {`
            (function(window, document, dataLayerName, id) {
              window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});
              var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
              var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName);
              var qPString=qP.length>0?("?"+qP.join("&")):"";
              tags.async=!0,tags.src="https://game-in-paris.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
              !function(a,n,i){
                a[n]=a[n]||{};
                for(var c=0;c<i.length;c++)!function(i){
                  a[n][i]=a[n][i]||{},
                  a[n][i].api=a[n][i].api||function(){
                    var a=[].slice.call(arguments,0);
                    "string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})
                  }
                }(i[c])
              }(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', 'f6e7f3e5-f7f4-4bf9-a3b2-3e595eb6cbdd');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
