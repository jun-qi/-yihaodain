// 获取用户输入的值
// 1.如果用户输入为空,鼠标进入登录框,span隐藏,鼠标离开登录框,span显示
  $('#acc').hover(
    function () {
      $(this).focus()
      $(this)
      .next()
      .hide();
    },
    function () {
      var acc = $('#acc').val();
      if (acc === '') {
        $(this)
          .next()
          .show()
      } else {
        $(this)
          .next()
          .hide()
      }
    },
  );

// 2.获取焦点,增加active类样式 blur
$('.inputs').focus(function () {
  $(this).addClass('active');
});
$('.inputs').blur(function () {
  $(this).removeClass('active');
});

// 3.点击自动登录,让提示显示
$('.tisi > input').click(function () {
  var fals = $('.tisi > input:checked').prop('checked');
  if (fals) {
    $(this)
      .next()
      .show()
  } else (
    $(this)
      .next()
      .hide()
  )
});

// 4.点击on元素,显示hide盒子,再点击隐藏
  var b = $(".wangzhan");
  b.delegate(".unfold", "click", function() {
      var a = $(this);
      if (a.hasClass("fold")) {
        $('.hide').hide();
          $(this).removeClass("fold")
      } else {
        $('.hide').show();
          $(this).addClass("fold")
      }
  });

// 5.点击提交按钮,如果账号为空,提示 | 密码为空,提示 | 密码有空格,提示不能有空格
$('.btn').click(function () {
  var acc = $('#acc').val();
  var psd = $('#psd').val();
  if (acc === '' && psd === '') {
    $('.hide_tisi')
    .show()
    .text('请输入账号以及密码')
  } else if (acc === '') {
    $('.hide_tisi')
    .show()
    .text('请输入账号')
  } else if (psd === '') {
    $('.hide_tisi')
    .show()
    .text('请输入密码')
  } 
});

// 点击二维码
$('.content_right').delegate(".code", "click", function() {
    var a = $(this);
    if (a.hasClass("code_fold")) {
      $('.hide_code').hide();
        $(this).removeClass("code_fold");
    } else {
      $('.hide_code').show();
        $(this).addClass("code_fold");
    }
});
