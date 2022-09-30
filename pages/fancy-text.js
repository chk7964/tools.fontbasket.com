import Head from 'next/head'
export default function fancytext() {
 return (
  <>
<Head>
    <title>Fancy Text Generator</title>
</Head>
<style jsx>{`
     .copybutton{
        cursor:pointer;
      `}</style>

    <div className="container p-2">

        
    <div>
        <h1>Fancy Font Generator</h1>
        <br/>
        <br/>
        <textarea type="text" className="border border-red-500 w-full rounded p-2 mb-2 fancytext" required="required" name="text" placeholder="Type or paste text here.."  defaultValue=""></textarea>
        <br />
        <div id="result">
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-1"  defaultValue="𝔓𝔯𝔢𝔳𝔦𝔢𝔴 𝔗𝔢𝔵𝔱" id="copy_0" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_0">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-2"  defaultValue="𝕻𝖗𝖊𝖛𝖎𝖊𝖜 𝕿𝖊𝖝𝖙" id="copy_1" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_1">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-3"  defaultValue="✋♪  Ƥ𝔯Ⓔᐯ𝔦乇ω т乇𝐗𝐭  😈🌷" id="copy_2" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_2">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-4"  defaultValue="𝓟𝓻𝓮𝓿𝓲𝓮𝔀 𝓣𝓮𝔁𝓽" id="copy_3" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_3">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-5"  defaultValue="𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉" id="copy_4" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_4">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-6"  defaultValue="ℙ𝕣𝕖𝕧𝕚𝕖𝕨 𝕋𝕖𝕩𝕥" id="copy_5" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_5">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-7"  defaultValue="Ｐｒｅｖｉｅｗ Ｔｅｘｔ" id="copy_6" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_6">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-8"  defaultValue="🐓 ⋆ 🐤  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐤 ⋆ 🐓" id="copy_7" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_7">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-9"  defaultValue="ᴘʀᴇᴠɪᴇᴡ ᴛᴇxᴛ" id="copy_8" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_8">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-10"  defaultValue="ʇxǝ⊥ ʍǝıʌǝɹԀ" id="copy_9" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_9">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-11"  defaultValue="P⃣&nbsp;&nbsp;&nbsp;r⃣&nbsp;&nbsp;&nbsp;e⃣&nbsp;&nbsp;&nbsp;v⃣&nbsp;&nbsp;&nbsp;i⃣&nbsp;&nbsp;&nbsp;e⃣&nbsp;&nbsp;&nbsp;w⃣ &nbsp;&nbsp;&nbsp;T⃣&nbsp;&nbsp;&nbsp;e⃣&nbsp;&nbsp;&nbsp;x⃣&nbsp;&nbsp;&nbsp;t⃣"
                    id="copy_10" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_10">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-12"  defaultValue="P⃞ &nbsp;&nbsp; r⃞ &nbsp;&nbsp; e⃞ &nbsp;&nbsp; v⃞ &nbsp;&nbsp; i⃞ &nbsp;&nbsp; e⃞ &nbsp;&nbsp; w⃞  &nbsp;&nbsp; T⃞ &nbsp;&nbsp; e⃞ &nbsp;&nbsp; x⃞ &nbsp;&nbsp; t⃞" id="copy_11" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_11">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-13"  defaultValue="🄿🅁🄴🅅🄸🄴🅆 🅃🄴🅇🅃" id="copy_12" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_12">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-14"  defaultValue="ƚxɘT wɘivɘɿꟼ" id="copy_13" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_13">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-15"  defaultValue="P̸̡̛̬̪̙͎̻̺̹̻̎͆̇̋̆r̸̡͙̦̺̜̪̋̅͌͋̈̈́̀̈́͠͝ȩ̶̯͙̰̜̈́̂̒͠v̸̛͖̰̤̗̝͕̆͊̐̂́̀͜͝͝ị̵̡̲̩̘̟͎̫̝̊̀̎̌̎̈́͂̀̕ẻ̴͓͈̗̖̞̖̣̯̰̓͑͊̐̕w̷̨̛̟͎̗͈̯̘̤͆͆̇͒̈̋̈͠ ̶̲̮̦͇̣̎̾́ͅT̴̖̜̄͋̄͋̇̄̄͗͘͝e̶̳̰̲͙̼͓̣̰͕̩͊̿̐͆͗̽x̵̼̫̙͇̘̗̒̄̽̾̎̑̽̀̾̚t̴͙́̈́͝"
                    id="copy_14" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_14">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-16"  defaultValue="🅿🆁🅴🆅🅸🅴🆆 🆃🅴🆇🆃" id="copy_15" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_15">Copy</span></div>
            </div>

            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-17"  defaultValue="ₚᵣₑᵥᵢₑw ₜₑₓₜ" id="copy_16" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_16">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-18"  defaultValue="ᴾʳᵉᵛⁱᵉʷ ᵀᵉˣᵗ" id="copy_17" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_17">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-19"  defaultValue="Ⓟⓡⓔⓥⓘⓔⓦ Ⓣⓔⓧⓣ" id="copy_18" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_18">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-20"  defaultValue="קгєשเєฬ ՇєאՇ" id="copy_19" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_19">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-21"  defaultValue="Pɾҽʋιҽɯ Tҽxƚ" id="copy_20" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_20">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-22"  defaultValue="քʀɛʋɨɛա ȶɛӼȶ" id="copy_21" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_21">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-23"  defaultValue="ᎮᏒᏋᏉᎥᏋᏇ ᏖᏋጀᏖ" id="copy_22" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_22">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-24"  defaultValue="℘ཞɛ۷ıɛῳ ɬɛҳɬ" id="copy_23" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_23">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-25"  defaultValue="prēงiēຟ tēxt" id="copy_24" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_24">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-26"  defaultValue="𝐏𝐫𝐞𝐯𝐢𝐞𝐰 𝐓𝐞𝐱𝐭" id="copy_25" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_25">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-27"  defaultValue="𝗣𝗿𝗲𝘃𝗶𝗲𝘄 𝗧𝗲𝘅𝘁" id="copy_26" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_26">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-28"  defaultValue="𝘗𝘳𝘦𝘷𝘪𝘦𝘸 𝘛𝘦𝘹𝘵" id="copy_27" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_27">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-29"  defaultValue="𝙋𝙧𝙚𝙫𝙞𝙚𝙬 𝙏𝙚𝙭𝙩" id="copy_28" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_28">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-30"  defaultValue="𝙿𝚛𝚎𝚟𝚒𝚎𝚠 𝚃𝚎𝚡𝚝" id="copy_29" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_29">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-31"  defaultValue="PЯΣVIΣЩ ƬΣXƬ" id="copy_30" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_30">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-32"  defaultValue="ρяєνιєω тєχт" id="copy_31" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_31">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-33"  defaultValue="þrêvïêw †êx†" id="copy_32" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_32">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-34"  defaultValue="₱ⱤɆVłɆ₩ ₮ɆӾ₮" id="copy_33" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_33">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-35"  defaultValue="卩尺乇ᐯ丨乇山 ㄒ乇乂ㄒ" id="copy_34" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_34">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-36"  defaultValue="ｱ尺乇√ﾉ乇W ｲ乇ﾒｲ" id="copy_35" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_35">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-37"  defaultValue="【P】【r】【e】【v】【i】【e】【w】 【T】【e】【x】【t】" id="copy_36" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_36">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-38"  defaultValue="『P』『r』『e』『v』『i』『e』『w』 『T』『e』『x』『t』" id="copy_37" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_37">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-39"  defaultValue="≋P≋r≋e≋v≋i≋e≋w≋ ≋T≋e≋x≋t≋" id="copy_38" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_38">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-40"  defaultValue="░P░r░e░v░i░e░w░ ░T░e░x░t░" id="copy_39" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_39">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-41"  defaultValue="(っ◔◡◔)っ ♥ Preview Text ♥" id="copy_40" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_40">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-42"  defaultValue="Ｐｒｅｖｉｅｗ　Ｔｅｘｔ　閲ワョ" id="copy_41" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_41">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-43"  defaultValue="Ｐｒｅｖｉｅｗ░Ｔｅｘｔ　（閲ワョ）" id="copy_42" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_42">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-44"  defaultValue="【&#65279;Ｐｒｅｖｉｅｗ　Ｔｅｘｔ】" id="copy_43" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_43">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-45"  defaultValue="˜”*°•.˜”*°• Preview Text •°*”˜.•°*”˜" id="copy_44" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_44">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-46"  defaultValue="[̲̅P][̲̅r][̲̅e][̲̅v][̲̅i][̲̅e][̲̅w] [̲̅T][̲̅e][̲̅x][̲̅t]" id="copy_45" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_45">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-47"  defaultValue="P҉r҉e҉v҉i҉e҉w҉ ҉T҉e҉x҉t҉" id="copy_46" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_46">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-48"  defaultValue="φɾҽѵìҽա Ͳҽ×է" id="copy_47" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_47">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-49"  defaultValue="ᑭᖇEᐯIEᗯ TE᙭T" id="copy_48" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_48">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-50"  defaultValue="ᕵᖇᘿᐺᓰᘿᘺ ᖶᘿ᙭ᖶ" id="copy_49" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_49">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-51"  defaultValue="P̶r̶e̶v̶i̶e̶w̶ ̶T̶e̶x̶t̶" id="copy_50" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_50">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-52"  defaultValue="P̴r̴e̴v̴i̴e̴w̴ ̴T̴e̴x̴t̴" id="copy_51" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_51">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-53"  defaultValue="P̷r̷e̷v̷i̷e̷w̷ ̷T̷e̷x̷t̷" id="copy_52" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_52">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-54"  defaultValue="P̲r̲e̲v̲i̲e̲w̲ ̲T̲e̲x̲t̲" id="copy_53" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_53">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-55"  defaultValue="P̳r̳e̳v̳i̳e̳w̳ ̳T̳e̳x̳t̳" id="copy_54" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_54">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-56"  defaultValue="P̾r̾e̾v̾i̾e̾w̾ ̾T̾e̾x̾t̾" id="copy_55" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_55">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-57"  defaultValue="P♥r♥e♥v♥i♥e♥w♥ ♥T♥e♥x♥t" id="copy_56" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_56">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-58"  defaultValue="P͎r͎e͎v͎i͎e͎w͎ ͎T͎e͎x͎t͎" id="copy_57" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_57">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-59"  defaultValue="P͓̽r͓̽e͓̽v͓̽i͓̽e͓̽w͓̽ ͓̽T͓̽e͓̽x͓̽t͓̽" id="copy_58" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_58">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-60"  defaultValue="Wingdings: 🏱︎❒︎♏︎❖︎♓︎♏︎⬥︎ ❄︎♏︎⌧︎⧫︎" id="copy_59" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_59">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-61"  defaultValue="✴  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  ✴" id="copy_60" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_60">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-62"  defaultValue="✶  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  ✶" id="copy_61" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_61">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-63"  defaultValue="✴｡  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  ｡✴" id="copy_62" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_62">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-64"  defaultValue="🐳  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐳" id="copy_63" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_63">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-65"  defaultValue="—(••÷  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  ÷••(—" id="copy_64" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_64">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-66"  defaultValue="👊😎  𝓟яε𝐯ᶤ€ʷ 𝓉ᵉ𝔁𝓣  ★🐙" id="copy_65" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_65">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-67"  defaultValue="💀♪  𝕡𝕣Ⓔᐯᶤ𝐄ω 丅乇𝐗Ť  ☞🐙" id="copy_66" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_66">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-68"  defaultValue="`•.¸¸.•´´¯`••._.• ρⓡєⓥเ𝓔Ŵ 𝓣ε𝔁𝔱 •._.••`¯´´•.¸¸.•`" id="copy_67" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_67">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-69"  defaultValue="🐣💜  ƤяⒺν𝓘ᵉᗯ тᵉＸ𝐭  🎃🐠" id="copy_68" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_68">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-70"  defaultValue="|!¤*'~``~'*¤!| ρŕ𝑒𝕍เⓔ𝓦 ţ𝔼𝔵Ŧ |!¤*'~``~'*¤!|" id="copy_69" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_69">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-71"  defaultValue="♘💔  קŕᵉ𝐯ｉ𝐄Ⓦ 𝐓ｅｘ𝐭  ♗🐸" id="copy_70" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_70">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-72"  defaultValue="🐲😎  𝓅ŕⓔᵛĮ𝐞𝓌 Ť𝒆𝓧𝔱  ☢♙" id="copy_71" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_71">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-73"  defaultValue="¸,ø¤º°`°º¤ø,¸¸,ø¤º° ρ𝓇є𝐕𝒾€ฬ Ŧεｘ𝐭 °º¤ø,¸¸,ø¤º°`°º¤ø,¸" id="copy_72" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_72">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-74"  defaultValue="👣🎯  ρᖇᗴνᶤ𝐞𝐰 𝔱Ẹ𝔵𝓽  ✊🍧" id="copy_73" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_73">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-75"  defaultValue="🍔🍓  ρŕє𝐯𝔦є𝓌 Ⓣε𝕩𝓣  🍟🐠" id="copy_74" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_74">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-76"  defaultValue="░▒▓█►─═  𝓅ＲẸV𝐢εᗯ 𝓉𝒆𝕩𝓽 ═─◄█▓▒░" id="copy_75" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_75">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-77"  defaultValue="]|I{•------» ᑭＲ乇𝕧Ꭵｅ𝔀 𝐓€ｘ丅 «------•}I|[" id="copy_76" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_76">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-78"  defaultValue="♧☹  𝔭Ř𝐄ν𝒾ε𝐖 𝕥є𝓍𝓽  💜♝" id="copy_77" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_77">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-79"  defaultValue="💞🎄  ƤＲ乇ѶĮⒺ𝓌 ᵗｅ𝔁𝐭  👤♕" id="copy_78" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_78">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-80"  defaultValue="🐊♤  ⓟ𝓇ⒺV𝓲ｅｗ Ťєｘ𝐭  🐳👺" id="copy_79" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_79">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-81"  defaultValue="🎄🎅  𝓹ⓇᵉVƗє𝓦 𝓣εχ𝐓  ♨🍩" id="copy_80" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_80">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-82"  defaultValue="💢♖  ｐг𝕖𝐕ᶤє𝐖 Ｔ𝔼ⓍŤ  ♖♙" id="copy_81" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_81">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-83"  defaultValue="ඏ🐚  ℙ尺𝔢ｖ𝓲єŴ 𝕥Ｅ𝓍t  ♝💚" id="copy_82" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_82">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-84"  defaultValue="🔥💔  ⓟⓇєVｉＥＷ t𝐄𝕩𝐭  🎉♜" id="copy_83" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_83">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-85"  defaultValue="😈☞  ℙ𝕣乇νｉᵉ𝓦 𝐭𝑒Ｘţ  💲♤" id="copy_84" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_84">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-86"  defaultValue="♔☠  𝓹Ｒ€ᐯ丨ᗴŴ Ｔєx𝔱  💚💢" id="copy_85" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_85">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-87"  defaultValue=".  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  ." id="copy_86" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_86">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-88"  defaultValue="🐢  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐢" id="copy_87" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_87">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-89"  defaultValue="🐞 ⋆ 🐾  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐾 ⋆ 🐞" id="copy_88" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_88">Copy</span></div>
            </div>
        </div>
        <center>
            <button className="bg-blue-600 p-2 px-4 rounded text-white loadmore">Load More</button>
        </center>

        <hr/>
    </div>


</div>
<script src="/js/fancy-text/clipboard.js" defer ></script>
<script src="/js/fancy-text/fonts.js" defer ></script>
<script src="/js/fancy-text/preview.js" defer ></script>
<script src="/js/fancy-text/copybutton.js" defer ></script>
  </>
 )
}