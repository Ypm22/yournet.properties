function submitForm(e){
  e.preventDefault();
  const f=e.target;
  const note=document.getElementById("form-note");
  const body=[
    "Name: "+f.name.value,
    "Phone: "+f.phone.value,
    "Email: "+f.email.value,
    "Property Address: "+f.address.value,
    "Service: "+f.service.value,
    "Project Details: "+f.message.value
  ].join("\n");
  window.location.href="mailto:yournet.properties@gmail.com?subject=New Website Estimate Request&body="+encodeURIComponent(body);
  note.textContent="Your email app should open with the estimate request. Thank you!";
}
