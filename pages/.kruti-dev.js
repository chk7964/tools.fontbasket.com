import Title from '../components/Title'
export default function About() {
 return (
  <>
   <Title title="About" />



<form name="form1"><br/>
<b>Krutidev-010</b> font text-box<br/>
<textarea name="TextToConvert" id="legacy_text" cols="90" rows="8" style="font-family:'Kruti Dev 010'; font-size:16px;"></textarea> <br>

<div align="middle">
<input  type="button" name="converter" id="converter" value=" Convert to Unicode >> " onClick="convert_to_unicode();" accesskey="c" title="शॉर्टकट shift+alt+c"> 
treating input as 
<input name="pb" id="is_TEXT" type="radio" Checked> Plain Text <input name="pb" id="is_HTML" type="radio">HTML<br/> <br>
</div>

<b>Unicode</b> text-box<br/>
<textarea name="ConvertedText" id="unicode_text" cols="92" rows="10"></textarea>
<br />

<div align="middle">
<input  type="button" id="converter" name="converter" value=" Convert to Krutidev-010 >> " onClick="convert_to_legacy_font();" accesskey="b" title="शॉर्टकट shift+alt+b">
treating input as 
<input name="pb2" id="is_TEXT2" type="radio" Checked> Plain Text <input name="pb" id="is_HTML2" type="radio">HTML<br/> <br>
</div>

</form>
  </>
 )
}