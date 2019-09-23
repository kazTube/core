<div class="dp-doc-container"">

<div class="dp-doc-tags">

<div class="desktop-version"></div>

</div>

<div class="dp-doc-body">

 layout کامل مربوط به نسخه ی دسکتاپ توسط این کامپوننت پیاده سازی شده است.
 
 برای آنکه پس از رفتن به یک مسیر به ابتدای صفحه اسکرول شود از رویداد activate مربوط به router-outlet استفاده شده است. به این منظور، در متد ngAfterViewInit، کانتیر مربوط به layout به عنوان appContainer در سرویس 
 [AppStateService](../injectables/AppStateService.html#readme)
 ثبت می شود و سپس با استفاده از متد scrollToTop این سرویس، صفحه به ابتدا اسکرول می شود. 


 انیمیشن مربوط به وارد شدن footer در این layout نیز در این کامپوننت تعریف شده است.
 
</div>
<div class="dp-doc-links">

<div class="parent"></div>

+ [BaseFullLayoutComponent](BaseFullLayoutComponent.html#readme)


</div>
</div> 


