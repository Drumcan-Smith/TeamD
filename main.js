function fncGetHinmei(key) {
  if (key == 1) {
    Hinmei.value = "ラムネ";
    Kingak.value = 100;
  }
  if (key == 2) {
    Hinmei.value = "チョコレート";
    Kingak.value = 200;
  }

  Out.value = eval(Out.value) + eval(Kingak.value);
  fncResetKey();
}

function fncReset() {
  Out.value = "0";
  Hinmei.value = "";
  Kingak.value = 0;
  key.value = "";
}
function fncResetKey() {
  key.value = "";
}
