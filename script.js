
// Booking actions: mailto and WhatsApp prefill
document.getElementById('sendMail').addEventListener('click', function(){
  var n = document.getElementById('b_name').value || 'Customer';
  var p = document.getElementById('b_phone').value || '';
  var e = document.getElementById('b_equip').value || '';
  var d = document.getElementById('b_date').value || '';
  var a = document.getElementById('b_addr').value || '';
  var subject = encodeURIComponent('Service booking - ' + n);
  var body = encodeURIComponent('Name: ' + n + '\nPhone: ' + p + '\nEquipment: ' + e + '\nPreferred: ' + d + '\nAddress: ' + a);
  window.location.href = 'mailto:swastikenterprisesindiaa@gmail.com?subject=' + subject + '&body=' + body;
});
document.getElementById('sendWA').addEventListener('click', function(){
  var n = encodeURIComponent(document.getElementById('b_name').value || 'Customer');
  var p = encodeURIComponent(document.getElementById('b_phone').value || '');
  var e = encodeURIComponent(document.getElementById('b_equip').value || '');
  var d = encodeURIComponent(document.getElementById('b_date').value || '');
  var a = encodeURIComponent(document.getElementById('b_addr').value || '');
  var text = 'Hello Swastik Enterprises, I want to book a service.%0AName:' + n + '%0APhone:' + p + '%0AEquipment:' + e + '%0APreferred:' + d + '%0AAddress:' + a;
  var wa = 'https://wa.me/919336766634?text=' + text;
  window.open(wa, '_blank');
});
