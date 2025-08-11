
// Simple client-side behavior
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  // Prepare mailto fallback
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var equipment = document.getElementById('equipment').value;
  var datetime = document.getElementById('datetime').value;
  var address = document.getElementById('address').value.trim();
  var message = document.getElementById('message').value.trim();
  var subject = encodeURIComponent('Service Request from Website - ' + name);
  var body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\nEquipment: ' + equipment + '\nPreferred: ' + datetime + '\nAddress: ' + address + '\nMessage: ' + message);
  window.location.href = 'mailto:swastikenterprisesindiaa@gmail.com?subject=' + subject + '&body=' + body;
});

document.getElementById('whatsappSend').addEventListener('click', function(e){
  // Prefill WhatsApp message
  var name = encodeURIComponent(document.getElementById('name').value.trim() || 'Customer');
  var phone = encodeURIComponent(document.getElementById('phone').value.trim() || '');
  var equipment = encodeURIComponent(document.getElementById('equipment').value || 'Equipment');
  var datetime = encodeURIComponent(document.getElementById('datetime').value || '');
  var address = encodeURIComponent(document.getElementById('address').value.trim() || '');
  var message = encodeURIComponent(document.getElementById('message').value.trim() || '');
  var text = 'Hello Swastik Enterprises, I would like to book a service.%0AName: ' + name + '%0APhone: ' + phone + '%0AEquipment: ' + equipment + '%0APreferred: ' + datetime + '%0AAddress: ' + address + '%0ADetails: ' + message;
  var wa_link = 'https://wa.me/919336766634?text=' + text;
  window.open(wa_link, '_blank');
});
