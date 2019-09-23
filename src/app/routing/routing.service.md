<div class="dp-doc-container"">

<div class="dp-doc-tags">

<div class="desktop-version"></div>
<div class="mobile-version"></div>



</div>

<div class="dp-doc-body">
 
در این سرویس به eventهای مربوط به router گوش داده می شود و با توجه به نوع event اقدامات لازم انجام می شود.

در این سرویس یک history از routeها نگهداری می شود تا در صفحاتی که نیاز به بازگشت به route قبلی هست از آن استفاده شود.
 
توجه به این نکته ضروری است که برای بازگشت به صفحه ی قبل در کامپوننت هایی که نیاز به این ویژگی دارند بایستی حتما از یکی از متدهای
navigateBack
یا
navigateBackWithExtra
که توسط این سرویس فراهم شده است استفاده شود. دلیل این امر آن است که اگر از این متدها استفاده نشود، آخرین مسیر از لیست history حذف نمی شود. 

</div>

</div> 