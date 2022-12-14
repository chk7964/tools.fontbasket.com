import Head from 'next/head'
import Script from 'next/script'

export default function fancytext() {
 return (
  <>
<Head>
    <title>Fancy Text Generator</title>
</Head>
 <Script src="https://code.jquery.com/jquery-3.6.1.min.js" async/>
<style jsx>{`
     .copybutton{
        cursor:pointer;
      `}</style>

   

        
    <div>
        <h1>Fancy Font Generator</h1>
        <br/>
        <br/>
        <textarea type="text" className="border border-red-500 w-full rounded p-2 mb-2 fancytext" required="required" name="text" placeholder="Type or paste text here.."  defaultValue=""></textarea>
        <br />
        <div id="result">
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-1"  defaultValue="ππ―π’π³π¦π’π΄ ππ’π΅π±" id="copy_0" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_0">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-2"  defaultValue="π»ππππππ πΏπππ" id="copy_1" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_1">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-3"  defaultValue="ββͺ  Ζ€π―βΊα―π¦δΉΟ ΡδΉππ­  ππ·" id="copy_2" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_2">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-4"  defaultValue="ππ»π?πΏπ²π?π π£π?ππ½" id="copy_3" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_3">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-5"  defaultValue="π«ππππΎππ π―πππ" id="copy_4" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_4">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-6"  defaultValue="βπ£ππ§πππ¨ πππ©π₯" id="copy_5" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_5">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-7"  defaultValue="οΌ°ο½ο½ο½ο½ο½ο½ οΌ΄ο½ο½ο½" id="copy_6" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_6">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-8"  defaultValue="π β π€  π  π«ππππΎππ π―πππ  π  π€ β π" id="copy_7" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_7">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-9"  defaultValue="α΄Κα΄α΄ Ιͺα΄α΄‘ α΄α΄xα΄" id="copy_8" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_8">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-10"  defaultValue="ΚxΗβ₯ ΚΗΔ±ΚΗΙΉΤ" id="copy_9" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_9">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-11"  defaultValue="Pβ£&nbsp;&nbsp;&nbsp;rβ£&nbsp;&nbsp;&nbsp;eβ£&nbsp;&nbsp;&nbsp;vβ£&nbsp;&nbsp;&nbsp;iβ£&nbsp;&nbsp;&nbsp;eβ£&nbsp;&nbsp;&nbsp;wβ£ &nbsp;&nbsp;&nbsp;Tβ£&nbsp;&nbsp;&nbsp;eβ£&nbsp;&nbsp;&nbsp;xβ£&nbsp;&nbsp;&nbsp;tβ£"
                    id="copy_10" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_10">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-12"  defaultValue="Pββ―&nbsp;&nbsp;β―rββ―&nbsp;&nbsp;β―eββ―&nbsp;&nbsp;β―vββ―&nbsp;&nbsp;β―iββ―&nbsp;&nbsp;β―eββ―&nbsp;&nbsp;β―wβ β―&nbsp;&nbsp;β―Tββ―&nbsp;&nbsp;β―eββ―&nbsp;&nbsp;β―xββ―&nbsp;&nbsp;β―tβ" id="copy_11" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_11">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-13"  defaultValue="πΏππ΄ππΈπ΄π ππ΄ππ" id="copy_12" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_12">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-14"  defaultValue="ΖxΙT wΙivΙΙΏκΌ" id="copy_13" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_13">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-15"  defaultValue="PΜΈΜΝΜΜΜΜΜ¬ΜͺΜ‘ΜΝΜ»ΜΊΜΉΜ»rΜΈΜΜΝΝ ΝΜΝΝΝΝΝΜ¦ΜΊΜΜͺΜ‘eΜΆΝΝ ΜΜΜ―Μ§ΝΜ°ΜvΜΈΜΝΝΜΜΝΜΜΜΝΜ°Μ€ΜΜΝΝiΜ΅ΜΝΜΜΜΜΝΝΜΜ£Μ²Μ‘Μ©ΜΜΝΜ«ΜeΜ΄ΜΜΜΝΝΜΝΝΜΜΜΜΜ£Μ―Μ°wΜ·ΝΜΝΜΝΜΜΜΝ ΜΝΜΜ¨ΝΜ―ΜΜ€ ΜΆΜΜΎΝΜ²Μ?ΝΜ¦ΝΜ£TΜ΄ΜΝΝΜΝΝΜΜΜΝΜΜeΜΆΝΜΏΜΝΝΜ½Μ³Μ°Μ²ΝΜΌΝΜ£Μ°ΝΜ©xΜ΅ΜΜΜ½ΜΎΜΜΜ½ΝΜΜΎΜΌΜ«ΜΝΜΜtΜ΄ΝΝΝΝ"
                    id="copy_14" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_14">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-16"  defaultValue="πΏππ΄ππΈπ΄π ππ΄ππ" id="copy_15" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_15">Copy</span></div>
            </div>

            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-17"  defaultValue="βα΅£βα΅₯α΅’βw ββββ" id="copy_16" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_16">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-18"  defaultValue="α΄ΎΚ³α΅α΅β±α΅Κ· α΅α΅Λ£α΅" id="copy_17" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_17">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-19"  defaultValue="ββ‘ββ₯βββ¦ βββ§β£" id="copy_18" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_18">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-20"  defaultValue="Χ§Π³ΡΧ©ΰΉΡΰΈ¬ ΥΡΧΥ" id="copy_19" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_19">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-21"  defaultValue="PΙΎ?½ΚΞΉ?½Ι― T?½xΖ" id="copy_20" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_20">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-22"  defaultValue="ΦΚΙΚΙ¨ΙΥ‘ ΘΆΙΣΌΘΆ" id="copy_21" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_21">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-23"  defaultValue="α?αααα₯αα αααα" id="copy_22" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_22">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-24"  defaultValue="βΰ½ΙΫ·Δ±ΙαΏ³ Ι¬Ι?³Ι¬" id="copy_23" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_23">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-25"  defaultValue="prΔΰΈiΔΰΊ tΔxt" id="copy_24" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_24">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-26"  defaultValue="ππ«ππ―π’ππ° πππ±π­" id="copy_25" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_25">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-27"  defaultValue="π£πΏπ²ππΆπ²π π§π²ππ" id="copy_26" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_26">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-28"  defaultValue="ππ³π¦π·πͺπ¦πΈ ππ¦πΉπ΅" id="copy_27" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_27">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-29"  defaultValue="ππ§ππ«πππ¬ πππ­π©" id="copy_28" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_28">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-30"  defaultValue="πΏππππππ  πππ‘π" id="copy_29" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_29">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-31"  defaultValue="PΠ―Ξ£VIΞ£Π© Ζ¬Ξ£XΖ¬" id="copy_30" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_30">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-32"  defaultValue="ΟΡΡΞ½ΞΉΡΟ ΡΡΟΡ" id="copy_31" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_31">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-33"  defaultValue="ΓΎrΓͺvΓ―Γͺw β Γͺxβ " id="copy_32" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_32">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-34"  defaultValue="β±β±€ΙVΕΙβ© β?ΙΣΎβ?" id="copy_33" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_33">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-35"  defaultValue="ε©ε°ΊδΉα―δΈ¨δΉε±± γδΉδΉγ" id="copy_34" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_34">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-36"  defaultValue="ο½±ε°ΊδΉβοΎδΉW ο½²δΉοΎο½²" id="copy_35" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_35">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-37"  defaultValue="γPγγrγγeγγvγγiγγeγγwγ γTγγeγγxγγtγ" id="copy_36" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_36">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-38"  defaultValue="γPγγrγγeγγvγγiγγeγγwγ γTγγeγγxγγtγ" id="copy_37" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_37">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-39"  defaultValue="βPβrβeβvβiβeβwβ βTβeβxβtβ" id="copy_38" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_38">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-40"  defaultValue="βPβrβeβvβiβeβwβ βTβeβxβtβ" id="copy_39" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_39">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-41"  defaultValue="(γ£ββ‘β)γ£ β₯ Preview Text β₯" id="copy_40" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_40">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-42"  defaultValue="οΌ°ο½ο½ο½ο½ο½ο½γοΌ΄ο½ο½ο½γι²γ―γ§" id="copy_41" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_41">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-43"  defaultValue="οΌ°ο½ο½ο½ο½ο½ο½βοΌ΄ο½ο½ο½γοΌι²γ―γ§οΌ" id="copy_42" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_42">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-44"  defaultValue="γ&#65279;οΌ°ο½ο½ο½ο½ο½ο½γοΌ΄ο½ο½ο½γ" id="copy_43" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_43">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-45"  defaultValue="Λβ*Β°β’.Λβ*Β°β’ Preview Text β’Β°*βΛ.β’Β°*βΛ" id="copy_44" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_44">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-46"  defaultValue="[ΜΜ²P][ΜΜ²r][ΜΜ²e][ΜΜ²v][ΜΜ²i][ΜΜ²e][ΜΜ²w] [ΜΜ²T][ΜΜ²e][ΜΜ²x][ΜΜ²t]" id="copy_45" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_45">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-47"  defaultValue="P?r?e?v?i?e?w? ?T?e?x?t?" id="copy_46" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_46">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-48"  defaultValue="ΟΙΎ?½Ρ΅Γ¬?½Υ‘ Ν²?½ΓΥ§" id="copy_47" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_47">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-49"  defaultValue="α­αEα―IEα― TEα­T" id="copy_48" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_48">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-50"  defaultValue="α΅ααΏαΊα°αΏαΊ αΆαΏα­αΆ" id="copy_49" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_49">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-51"  defaultValue="PΜΆrΜΆeΜΆvΜΆiΜΆeΜΆwΜΆ ΜΆTΜΆeΜΆxΜΆtΜΆ" id="copy_50" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_50">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-52"  defaultValue="PΜ΄rΜ΄eΜ΄vΜ΄iΜ΄eΜ΄wΜ΄ Μ΄TΜ΄eΜ΄xΜ΄tΜ΄" id="copy_51" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_51">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-53"  defaultValue="PΜ·rΜ·eΜ·vΜ·iΜ·eΜ·wΜ· Μ·TΜ·eΜ·xΜ·tΜ·" id="copy_52" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_52">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-54"  defaultValue="PΜ²rΜ²eΜ²vΜ²iΜ²eΜ²wΜ² Μ²TΜ²eΜ²xΜ²tΜ²" id="copy_53" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_53">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-55"  defaultValue="PΜ³rΜ³eΜ³vΜ³iΜ³eΜ³wΜ³ Μ³TΜ³eΜ³xΜ³tΜ³" id="copy_54" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_54">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-56"  defaultValue="PΜΎrΜΎeΜΎvΜΎiΜΎeΜΎwΜΎ ΜΎTΜΎeΜΎxΜΎtΜΎ" id="copy_55" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_55">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-57"  defaultValue="Pβ₯rβ₯eβ₯vβ₯iβ₯eβ₯wβ₯ β₯Tβ₯eβ₯xβ₯t" id="copy_56" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_56">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-58"  defaultValue="PΝrΝeΝvΝiΝeΝwΝ ΝTΝeΝxΝtΝ" id="copy_57" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_57">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-59"  defaultValue="PΜ½ΝrΜ½ΝeΜ½ΝvΜ½ΝiΜ½ΝeΜ½ΝwΜ½Ν Μ½ΝTΜ½ΝeΜ½ΝxΜ½ΝtΜ½Ν" id="copy_58" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_58">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-60"  defaultValue="Wingdings: π±οΈβοΈβοΈβοΈβοΈβοΈβ¬₯οΈ βοΈβοΈβ§οΈβ§«οΈ" id="copy_59" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_59">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-61"  defaultValue="β΄  π  π«ππππΎππ π―πππ  π  β΄" id="copy_60" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_60">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-62"  defaultValue="βΆ  π  π«ππππΎππ π―πππ  π  βΆ" id="copy_61" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_61">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-63"  defaultValue="β΄ο½‘  π  π«ππππΎππ π―πππ  π  ο½‘β΄" id="copy_62" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_62">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-64"  defaultValue="π³  π  π«ππππΎππ π―πππ  π  π³" id="copy_63" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_63">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-65"  defaultValue="β(β’β’Γ·  π  π«ππππΎππ π―πππ  π  Γ·β’β’(β" id="copy_64" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_64">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-66"  defaultValue="ππ  πΡΞ΅π―αΆ€β¬Κ· πα΅ππ£  βπ" id="copy_65" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_65">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-67"  defaultValue="πβͺ  π‘π£βΊα―αΆ€πΟ δΈδΉπΕ€  βπ" id="copy_66" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_66">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-68"  defaultValue="`β’.ΒΈΒΈ.β’Β΄Β΄Β―`β’β’._.β’ Οβ‘Ρβ₯ΰΉπΕ΄ π£Ξ΅ππ± β’._.β’β’`Β―Β΄Β΄β’.ΒΈΒΈ.β’`" id="copy_67" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_67">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-69"  defaultValue="π£π  Ζ€ΡβΊΞ½πα΅α― Ρα΅οΌΈπ­  ππ " id="copy_68" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_68">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-70"  defaultValue="|!Β€*'~``~'*Β€!| ΟΕππΰΉβπ¦ Ε£πΌπ΅Ε¦ |!Β€*'~``~'*Β€!|" id="copy_69" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_69">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-71"  defaultValue="βπ  Χ§Εα΅π―ο½πβ πο½ο½π­  βπΈ" id="copy_70" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_70">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-72"  defaultValue="π²π  πΕβα΅Δ?ππ Ε€ππ§π±  β’β" id="copy_71" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_71">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-73"  defaultValue="ΒΈ,ΓΈΒ€ΒΊΒ°`Β°ΒΊΒ€ΓΈ,ΒΈΒΈ,ΓΈΒ€ΒΊΒ° ΟπΡππΎβ¬ΰΈ¬ Ε¦Ξ΅ο½π­ Β°ΒΊΒ€ΓΈ,ΒΈΒΈ,ΓΈΒ€ΒΊΒ°`Β°ΒΊΒ€ΓΈ,ΒΈ" id="copy_72" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_72">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-74"  defaultValue="π£π―  Οαα΄Ξ½αΆ€ππ° π±αΊΈπ΅π½  βπ§" id="copy_73" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_73">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-75"  defaultValue="ππ  ΟΕΡπ―π¦Ρπ βΞ΅π©π£  ππ " id="copy_74" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_74">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-76"  defaultValue="βββββΊββ  ποΌ²αΊΈVπ’Ξ΅α― πππ©π½ βββββββ" id="copy_75" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_75">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-77"  defaultValue="]|I{β’------Β» α­οΌ²δΉπ§α₯ο½π πβ¬ο½δΈ Β«------β’}I|[" id="copy_76" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_76">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-78"  defaultValue="β§βΉ  π­ΕπΞ½πΎΞ΅π π₯Ρππ½  πβ" id="copy_77" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_77">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-79"  defaultValue="ππ  Ζ€οΌ²δΉΡΆΔ?βΊπ α΅ο½ππ­  π€β" id="copy_78" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_78">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-80"  defaultValue="πβ€  βπβΊVπ²ο½ο½ Ε€Ρο½π­  π³πΊ" id="copy_79" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_79">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-81"  defaultValue="ππ  πΉβα΅VΖΡπ¦ π£Ξ΅Οπ  β¨π©" id="copy_80" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_80">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-82"  defaultValue="π’β  ο½Π³ππαΆ€Ρπ οΌ΄πΌβΕ€  ββ" id="copy_81" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_81">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-83"  defaultValue="ΰΆπ  βε°Ίπ’ο½π²ΡΕ΄ π₯οΌ₯πt  βπ" id="copy_82" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_82">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-84"  defaultValue="π₯π  ββΡVο½οΌ₯οΌ· tππ©π­  πβ" id="copy_83" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_83">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-85"  defaultValue="πβ  βπ£δΉΞ½ο½α΅π¦ π­ποΌΈΕ£  π²β€" id="copy_84" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_84">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-86"  defaultValue="ββ   πΉοΌ²β¬α―δΈ¨α΄Ε΄ οΌ΄Ρxπ±  ππ’" id="copy_85" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_85">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-87"  defaultValue=".  π  π«ππππΎππ π―πππ  π  ." id="copy_86" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_86">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-88"  defaultValue="π’  π  π«ππππΎππ π―πππ  π  π’" id="copy_87" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_87">Copy</span></div>
            </div>
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit text-89"  defaultValue="π β πΎ  π  π«ππππΎππ π―πππ  π  πΎ β π" id="copy_88" readOnly="readOnly"/>
                <div className="input-group-append"><span className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none copybutton"   data-clipboard-action="copy" data-clipboard-target="#copy_88">Copy</span></div>
            </div>
        </div>
        <center className="mt-8">
            <button className="bg-blue-600 p-2 px-8 rounded text-white loadmore">Load More</button>
        </center>
 


</div>

<Script src="/js/fancy-text/clipboard.js" defer ></Script>
<Script src="/js/fancy-text/fonts.js" strategy="beforeInteractive" ></Script>
<Script src="/js/fancy-text/preview.js" defer ></Script>
<Script src="/js/fancy-text/copybutton.js" defer ></Script>





  </>
 )
}

