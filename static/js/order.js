/**
 * (function () {
 * 
 * }())
 * 
 * 等同于
 * 
 * function foo() {
 * 
 * }
 * foo();
 * 
 * 作用是可以立即执行一段代码，简化先定义函数再调用的流程
 */
(function () {
  'use strict' // 严格模式，执行更为严格的语法错误检测

  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated')
      }, false);
    });
  }, false);
}())