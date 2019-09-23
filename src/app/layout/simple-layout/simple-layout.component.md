<div class="dp-doc-container"">

<div class="dp-doc-tags">

<div class="mobile-version"></div>
<div class="desktop-version"></div>

</div>

<div class="dp-doc-body">

simple layout برای هر دو نسخه ی موبایل و دسکتاپ توسط این کامپوننت پیاده سازی شده است.

برای آنکه پس از رفتن به یک مسیر به ابتدای صفحه اسکرول شود از رویداد activate مربوط به router-outlet استفاده شده است. به این منظور، در متد ngAfterViewInit، کانتیر مربوط به layout به عنوان appContainer در سرویس 
[AppStateService](../injectables/AppStateService.html#readme)
ثبت می شود و سپس با استفاده از متد scrollToTop این سرویس، صفحه به ابتدا اسکرول می شود. 

</div>


</div> 


