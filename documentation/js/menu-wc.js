'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">daroopin-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a3a9138ea09c5e2dc59b2a858eae890a"' : 'data-target="#xs-components-links-module-AppModule-a3a9138ea09c5e2dc59b2a858eae890a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a3a9138ea09c5e2dc59b2a858eae890a"' :
                                            'id="xs-components-links-module-AppModule-a3a9138ea09c5e2dc59b2a858eae890a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BasketModule.html" data-type="entity-link">BasketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BasketModule-83bdf024dde73828efdb94f878c0bf4a"' : 'data-target="#xs-components-links-module-BasketModule-83bdf024dde73828efdb94f878c0bf4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BasketModule-83bdf024dde73828efdb94f878c0bf4a"' :
                                            'id="xs-components-links-module-BasketModule-83bdf024dde73828efdb94f878c0bf4a"' }>
                                            <li class="link">
                                                <a href="components/BaseBasketItemCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseBasketItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseBasketItemListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseBasketItemListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseBasketPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseBasketPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseFinalizePurchaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseFinalizePurchaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketStepperControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasketStepperControlComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelPurchaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CancelPurchaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InquiryFromPharmacyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InquiryFromPharmacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PurchaseFeedbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PurchaseFeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserHasOpenOrderPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserHasOpenOrderPopUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentModule.html" data-type="entity-link">CommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommentModule-907ff1d2ba3c4de6fac5f039e1189f5e"' : 'data-target="#xs-components-links-module-CommentModule-907ff1d2ba3c4de6fac5f039e1189f5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommentModule-907ff1d2ba3c4de6fac5f039e1189f5e"' :
                                            'id="xs-components-links-module-CommentModule-907ff1d2ba3c4de6fac5f039e1189f5e"' }>
                                            <li class="link">
                                                <a href="components/BaseInsertCommentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseInsertCommentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCommentConfirmPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCommentConfirmPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertCommentFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertCommentFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopBasketModule.html" data-type="entity-link">DesktopBasketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopBasketModule-30c45713bf1563149f6a58c8b548f920"' : 'data-target="#xs-components-links-module-DesktopBasketModule-30c45713bf1563149f6a58c8b548f920"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopBasketModule-30c45713bf1563149f6a58c8b548f920"' :
                                            'id="xs-components-links-module-DesktopBasketModule-30c45713bf1563149f6a58c8b548f920"' }>
                                            <li class="link">
                                                <a href="components/DesktopBasketItemCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopBasketItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopBasketItemListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopBasketItemListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopBasketPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopBasketPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopCancelPurchasePopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopCancelPurchasePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopFinalizePurchaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopFinalizePurchaseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopCommentModule.html" data-type="entity-link">DesktopCommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopCommentModule-7b1c88dff214a0139feca4f9dffa4c78"' : 'data-target="#xs-components-links-module-DesktopCommentModule-7b1c88dff214a0139feca4f9dffa4c78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopCommentModule-7b1c88dff214a0139feca4f9dffa4c78"' :
                                            'id="xs-components-links-module-DesktopCommentModule-7b1c88dff214a0139feca4f9dffa4c78"' }>
                                            <li class="link">
                                                <a href="components/DesktopInsertCommentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopInsertCommentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopInsertCommentPopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopInsertCommentPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopHomeModule.html" data-type="entity-link">DesktopHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopHomeModule-0f57d86aec0403375402977a78f60a86"' : 'data-target="#xs-components-links-module-DesktopHomeModule-0f57d86aec0403375402977a78f60a86"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopHomeModule-0f57d86aec0403375402977a78f60a86"' :
                                            'id="xs-components-links-module-DesktopHomeModule-0f57d86aec0403375402977a78f60a86"' }>
                                            <li class="link">
                                                <a href="components/DesktopDaroopinVitrinComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopDaroopinVitrinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopGeneralHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopGeneralHomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopUserHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopUserHomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopOrderModule.html" data-type="entity-link">DesktopOrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopOrderModule-cddb3493b9d3247cb5acadb061e1d5a8"' : 'data-target="#xs-components-links-module-DesktopOrderModule-cddb3493b9d3247cb5acadb061e1d5a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopOrderModule-cddb3493b9d3247cb5acadb061e1d5a8"' :
                                            'id="xs-components-links-module-DesktopOrderModule-cddb3493b9d3247cb5acadb061e1d5a8"' }>
                                            <li class="link">
                                                <a href="components/DesktopOrderDetailCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopOrderDetailCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopOrderDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopOrderDetailPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopOrderListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopOrderListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopOrderListSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopOrderListSummaryCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopPharmacyModule.html" data-type="entity-link">DesktopPharmacyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopPharmacyModule-7ac57ae059697a867ce4f8a5a33b8ead"' : 'data-target="#xs-components-links-module-DesktopPharmacyModule-7ac57ae059697a867ce4f8a5a33b8ead"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopPharmacyModule-7ac57ae059697a867ce4f8a5a33b8ead"' :
                                            'id="xs-components-links-module-DesktopPharmacyModule-7ac57ae059697a867ce4f8a5a33b8ead"' }>
                                            <li class="link">
                                                <a href="components/DesktopPharmacyPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopPharmacyPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopPharmacySpecialOfferProductListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopPharmacySpecialOfferProductListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopProductDetailModule.html" data-type="entity-link">DesktopProductDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopProductDetailModule-12eea545e0a23e4483b05ba669f333b5"' : 'data-target="#xs-components-links-module-DesktopProductDetailModule-12eea545e0a23e4483b05ba669f333b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopProductDetailModule-12eea545e0a23e4483b05ba669f333b5"' :
                                            'id="xs-components-links-module-DesktopProductDetailModule-12eea545e0a23e4483b05ba669f333b5"' }>
                                            <li class="link">
                                                <a href="components/DesktopImageSliderPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopImageSliderPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductAttributesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductAttributesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductDescriptionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductDescriptionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductDetailPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductSuggestionPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductSuggestionPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopProductListModule.html" data-type="entity-link">DesktopProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopProductListModule-29e7535998616736157d7c7cc8c81486"' : 'data-target="#xs-components-links-module-DesktopProductListModule-29e7535998616736157d7c7cc8c81486"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopProductListModule-29e7535998616736157d7c7cc8c81486"' :
                                            'id="xs-components-links-module-DesktopProductListModule-29e7535998616736157d7c7cc8c81486"' }>
                                            <li class="link">
                                                <a href="components/DesktopProductCategoryTreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductCategoryTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductListPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductListPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProductListResultCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProductListResultCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopSearchInCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopSearchInCategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DesktopProfileModule.html" data-type="entity-link">DesktopProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DesktopProfileModule-fd98da7459dd30334dda2640d18a485a"' : 'data-target="#xs-components-links-module-DesktopProfileModule-fd98da7459dd30334dda2640d18a485a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesktopProfileModule-fd98da7459dd30334dda2640d18a485a"' :
                                            'id="xs-components-links-module-DesktopProfileModule-fd98da7459dd30334dda2640d18a485a"' }>
                                            <li class="link">
                                                <a href="components/DesktopAddAddressPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopAddAddressPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProfileAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProfileAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProfilePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProfilePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopProfilePersonalInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopProfilePersonalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopRegisterPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopRegisterPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0b7dad6815c8947e1fb454749c20cfd8"' : 'data-target="#xs-components-links-module-HomeModule-0b7dad6815c8947e1fb454749c20cfd8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0b7dad6815c8947e1fb454749c20cfd8"' :
                                            'id="xs-components-links-module-HomeModule-0b7dad6815c8947e1fb454749c20cfd8"' }>
                                            <li class="link">
                                                <a href="components/BaseGeneralHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseGeneralHomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseUserHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseUserHomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductOfferCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductOfferCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductOfferCarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductOfferCarouselComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InitializerModule.html" data-type="entity-link">InitializerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InitializerModule-e91fcc61638471e616619a46ecab41fa"' : 'data-target="#xs-injectables-links-module-InitializerModule-e91fcc61638471e616619a46ecab41fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InitializerModule-e91fcc61638471e616619a46ecab41fa"' :
                                        'id="xs-injectables-links-module-InitializerModule-e91fcc61638471e616619a46ecab41fa"' }>
                                        <li class="link">
                                            <a href="injectables/InitializerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InitializerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' : 'data-target="#xs-components-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' :
                                            'id="xs-components-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseFullLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseFullLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseSubMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseSubMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactUsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopFullLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopFullLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopSubMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopSubMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FAQComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FAQComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileAComplaintComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileAComplaintComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HowToInsertAnOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowToInsertAnOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileFullLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileFullLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileSubMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileSubMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' : 'data-target="#xs-directives-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' :
                                        'id="xs-directives-links-module-LayoutModule-ec590e9cb84eaa1331a8699788eaaf27"' }>
                                        <li class="link">
                                            <a href="directives/CenterMatMenuDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CenterMatMenuDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' : 'data-target="#xs-components-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' :
                                            'id="xs-components-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' : 'data-target="#xs-pipes-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' :
                                            'id="xs-pipes-links-module-LoginModule-175ee8fdd1dca4673ee440987d10391a"' }>
                                            <li class="link">
                                                <a href="pipes/SecondsTimerFormatterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecondsTimerFormatterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MobileBasketModule.html" data-type="entity-link">MobileBasketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileBasketModule-26bddf7fd87dc9e5e6363edea687b673"' : 'data-target="#xs-components-links-module-MobileBasketModule-26bddf7fd87dc9e5e6363edea687b673"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileBasketModule-26bddf7fd87dc9e5e6363edea687b673"' :
                                            'id="xs-components-links-module-MobileBasketModule-26bddf7fd87dc9e5e6363edea687b673"' }>
                                            <li class="link">
                                                <a href="components/MobileBasketItemCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileBasketItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileBasketItemListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileBasketItemListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileBasketPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileBasketPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileCancelPurchasePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileCancelPurchasePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileFinalizePurchaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileFinalizePurchaseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileCommentModule.html" data-type="entity-link">MobileCommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileCommentModule-a10326262438526634c70cc92f082a55"' : 'data-target="#xs-components-links-module-MobileCommentModule-a10326262438526634c70cc92f082a55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileCommentModule-a10326262438526634c70cc92f082a55"' :
                                            'id="xs-components-links-module-MobileCommentModule-a10326262438526634c70cc92f082a55"' }>
                                            <li class="link">
                                                <a href="components/MobileInsertCommentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileInsertCommentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileHomeModule.html" data-type="entity-link">MobileHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileHomeModule-d2646e292016ffff7b1b2e6b672c2b66"' : 'data-target="#xs-components-links-module-MobileHomeModule-d2646e292016ffff7b1b2e6b672c2b66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileHomeModule-d2646e292016ffff7b1b2e6b672c2b66"' :
                                            'id="xs-components-links-module-MobileHomeModule-d2646e292016ffff7b1b2e6b672c2b66"' }>
                                            <li class="link">
                                                <a href="components/MobileGeneralHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileGeneralHomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileUserHomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileUserHomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileOrderModule.html" data-type="entity-link">MobileOrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileOrderModule-fea983d433eb4a908e9de01b09a776da"' : 'data-target="#xs-components-links-module-MobileOrderModule-fea983d433eb4a908e9de01b09a776da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileOrderModule-fea983d433eb4a908e9de01b09a776da"' :
                                            'id="xs-components-links-module-MobileOrderModule-fea983d433eb4a908e9de01b09a776da"' }>
                                            <li class="link">
                                                <a href="components/MobileOrderDetailCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileOrderDetailCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileOrderDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileOrderDetailPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileOrderListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileOrderListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileOrderListSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileOrderListSummaryCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobilePharmacyModule.html" data-type="entity-link">MobilePharmacyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobilePharmacyModule-f2688067c49a3218329bfa48bb90f917"' : 'data-target="#xs-components-links-module-MobilePharmacyModule-f2688067c49a3218329bfa48bb90f917"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobilePharmacyModule-f2688067c49a3218329bfa48bb90f917"' :
                                            'id="xs-components-links-module-MobilePharmacyModule-f2688067c49a3218329bfa48bb90f917"' }>
                                            <li class="link">
                                                <a href="components/MobilePharmacyPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobilePharmacyPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileProductDetailModule.html" data-type="entity-link">MobileProductDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileProductDetailModule-2fba03258d823eb160a7ac084f9f246d"' : 'data-target="#xs-components-links-module-MobileProductDetailModule-2fba03258d823eb160a7ac084f9f246d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileProductDetailModule-2fba03258d823eb160a7ac084f9f246d"' :
                                            'id="xs-components-links-module-MobileProductDetailModule-2fba03258d823eb160a7ac084f9f246d"' }>
                                            <li class="link">
                                                <a href="components/MobileProductAttributesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProductAttributesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileProductDescriptionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProductDescriptionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileProductDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProductDetailPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileProductListModule.html" data-type="entity-link">MobileProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileProductListModule-14e6d136eebef3eb490b5dbb2de5ab35"' : 'data-target="#xs-components-links-module-MobileProductListModule-14e6d136eebef3eb490b5dbb2de5ab35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileProductListModule-14e6d136eebef3eb490b5dbb2de5ab35"' :
                                            'id="xs-components-links-module-MobileProductListModule-14e6d136eebef3eb490b5dbb2de5ab35"' }>
                                            <li class="link">
                                                <a href="components/MobileProductListPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProductListPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileProfileModule.html" data-type="entity-link">MobileProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileProfileModule-704dee4df9dd560960a60b534235c75e"' : 'data-target="#xs-components-links-module-MobileProfileModule-704dee4df9dd560960a60b534235c75e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileProfileModule-704dee4df9dd560960a60b534235c75e"' :
                                            'id="xs-components-links-module-MobileProfileModule-704dee4df9dd560960a60b534235c75e"' }>
                                            <li class="link">
                                                <a href="components/MobileAddAddressPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileAddAddressPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileProfileAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProfileAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileProfilePersonalInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileProfilePersonalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileRegisterPersonalInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileRegisterPersonalInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link">OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderModule-040453e65d7df6e654150398431049cc"' : 'data-target="#xs-components-links-module-OrderModule-040453e65d7df6e654150398431049cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderModule-040453e65d7df6e654150398431049cc"' :
                                            'id="xs-components-links-module-OrderModule-040453e65d7df6e654150398431049cc"' }>
                                            <li class="link">
                                                <a href="components/BaseOrderDetailCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseOrderDetailCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseOrderDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseOrderDetailPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseOrderListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseOrderListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseOrderListSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseOrderListSummaryCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PharmacyModule.html" data-type="entity-link">PharmacyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PharmacyModule-0d72e08aa45ea71aee7a6be896c90db6"' : 'data-target="#xs-components-links-module-PharmacyModule-0d72e08aa45ea71aee7a6be896c90db6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PharmacyModule-0d72e08aa45ea71aee7a6be896c90db6"' :
                                            'id="xs-components-links-module-PharmacyModule-0d72e08aa45ea71aee7a6be896c90db6"' }>
                                            <li class="link">
                                                <a href="components/BasePharmacyPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasePharmacyPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactSupportPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactSupportPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactSupportPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactSupportPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PharmacyInfoCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PharmacyInfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscribeToPharmacyPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscribeToPharmacyPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionCompletedPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscriptionCompletedPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductDetailModule.html" data-type="entity-link">ProductDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductDetailModule-391f501ddfc60c83dfa2ba61b7b2d270"' : 'data-target="#xs-components-links-module-ProductDetailModule-391f501ddfc60c83dfa2ba61b7b2d270"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductDetailModule-391f501ddfc60c83dfa2ba61b7b2d270"' :
                                            'id="xs-components-links-module-ProductDetailModule-391f501ddfc60c83dfa2ba61b7b2d270"' }>
                                            <li class="link">
                                                <a href="components/BaseProductAttributesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProductAttributesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseProductDescriptionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProductDescriptionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseProductDetailPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProductDetailPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductListModule.html" data-type="entity-link">ProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductListModule-8ae93f684920b5218e663572436da65f"' : 'data-target="#xs-components-links-module-ProductListModule-8ae93f684920b5218e663572436da65f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductListModule-8ae93f684920b5218e663572436da65f"' :
                                            'id="xs-components-links-module-ProductListModule-8ae93f684920b5218e663572436da65f"' }>
                                            <li class="link">
                                                <a href="components/BaseProductListPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProductListPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-97aac50394cae3c260d2a1bb9973ed74"' : 'data-target="#xs-components-links-module-ProfileModule-97aac50394cae3c260d2a1bb9973ed74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-97aac50394cae3c260d2a1bb9973ed74"' :
                                            'id="xs-components-links-module-ProfileModule-97aac50394cae3c260d2a1bb9973ed74"' }>
                                            <li class="link">
                                                <a href="components/AddressInfoFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressInfoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AvatarButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarSelectionPopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AvatarSelectionPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseAddAddressPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseAddAddressPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseProfileAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProfileAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseProfilePersonalInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseProfilePersonalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalInfoFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalInfoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RulesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RulesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' : 'data-target="#xs-components-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' :
                                            'id="xs-components-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                            <li class="link">
                                                <a href="components/AddNewProductCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddNewProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseAddressCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseAddressCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseOrderProductSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseOrderProductSummaryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopAddressCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopAddressCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopBreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopBreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopOrderProductSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesktopOrderProductSummaryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImgWithLoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImgWithLoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileAddressCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileAddressCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileAddressListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileAddressListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileBillComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileBillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileOrderProductSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileOrderProductSummaryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileSelectSortByPopUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileSelectSortByPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderProviderCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderProviderCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductSummaryCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductSummaryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RateStarBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RateStarBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' : 'data-target="#xs-directives-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' :
                                        'id="xs-directives-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                        <li class="link">
                                            <a href="directives/CaptureClickEventDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaptureClickEventDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/CaptureScrollEventDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaptureScrollEventDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DpButtonDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DpButtonDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DpFormFieldDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DpFormFieldDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DpSelectDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DpSelectDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' : 'data-target="#xs-pipes-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' :
                                            'id="xs-pipes-links-module-SharedModule-2689448e2d858dd57b07b17f850446f3"' }>
                                            <li class="link">
                                                <a href="pipes/FriendlyPricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FriendlyPricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressDTO.html" data-type="entity-link">AddressDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/BasketItemDTO.html" data-type="entity-link">BasketItemDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/BreadcrumbItemModel.html" data-type="entity-link">BreadcrumbItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CancelPurchaseDTO.html" data-type="entity-link">CancelPurchaseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategorySearchResultDTO.html" data-type="entity-link">CategorySearchResultDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CityDTO.html" data-type="entity-link">CityDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentDTO.html" data-type="entity-link">CommentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentListDTO.html" data-type="entity-link">CommentListDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentSummaryDTO.html" data-type="entity-link">CommentSummaryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DesktopRoutes.html" data-type="entity-link">DesktopRoutes</a>
                            </li>
                            <li class="link">
                                <a href="classes/FlatCategoryDTO.html" data-type="entity-link">FlatCategoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPharmacyVitrinRequestDTO.html" data-type="entity-link">GetPharmacyVitrinRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProductListRequestDTO.html" data-type="entity-link">GetProductListRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetRelatedProductListRequestDTO.html" data-type="entity-link">GetRelatedProductListRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSimilarProductListRequestDTO.html" data-type="entity-link">GetSimilarProductListRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationModel.html" data-type="entity-link">LocationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/MapLocation.html" data-type="entity-link">MapLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuCategoryDTO.html" data-type="entity-link">MenuCategoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/MobileRoutes.html" data-type="entity-link">MobileRoutes</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenOrderResponseDTO.html" data-type="entity-link">OpenOrderResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDetailDTO.html" data-type="entity-link">OrderDetailDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderProductSummaryDTO.html" data-type="entity-link">OrderProductSummaryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderSummaryDTO.html" data-type="entity-link">OrderSummaryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PersonalInfoDTO.html" data-type="entity-link">PersonalInfoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacyInfoDTO.html" data-type="entity-link">PharmacyInfoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacyVitrinDTO.html" data-type="entity-link">PharmacyVitrinDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PredefinedCommentDTO.html" data-type="entity-link">PredefinedCommentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PredefinedCommentListDTO.html" data-type="entity-link">PredefinedCommentListDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeDTO.html" data-type="entity-link">ProductAttributeDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInfoDTO.html" data-type="entity-link">ProductInfoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductListResponseDTO.html" data-type="entity-link">ProductListResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSearchResultDTO.html" data-type="entity-link">ProductSearchResultDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSummaryDTO.html" data-type="entity-link">ProductSummaryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductUnitDTO.html" data-type="entity-link">ProductUnitDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PurchaseFeedbackDTO.html" data-type="entity-link">PurchaseFeedbackDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/RestAddresses.html" data-type="entity-link">RestAddresses</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchInCategoryRequestDTO.html" data-type="entity-link">SearchInCategoryRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchInPharmacyProductsRequestDTO.html" data-type="entity-link">SearchInPharmacyProductsRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchResultDTO.html" data-type="entity-link">SearchResultDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortByOption.html" data-type="entity-link">SortByOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecialOfferProductDTO.html" data-type="entity-link">SpecialOfferProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecialOfferProductSummaryDTO.html" data-type="entity-link">SpecialOfferProductSummaryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateDTO.html" data-type="entity-link">StateDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusDTO.html" data-type="entity-link">StatusDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SyncBasketRequestDTO.html" data-type="entity-link">SyncBasketRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TopCategoryDTO.html" data-type="entity-link">TopCategoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TopProductListDTO.html" data-type="entity-link">TopProductListDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBasketItemDTO.html" data-type="entity-link">UpdateBasketItemDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserHomePageInfoDTO.html" data-type="entity-link">UserHomePageInfoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileDTO.html" data-type="entity-link">UserProfileDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressFormService.html" data-type="entity-link">AddressFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppStateService.html" data-type="entity-link">AppStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BasketPageService.html" data-type="entity-link">BasketPageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CancelPurchaseService.html" data-type="entity-link">CancelPurchaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentFormService.html" data-type="entity-link">CommentFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentService.html" data-type="entity-link">CommentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeaderService.html" data-type="entity-link">HeaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitializerService.html" data-type="entity-link">InitializerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link">MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderDetailService.html" data-type="entity-link">OrderDetailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderListService.html" data-type="entity-link">OrderListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonalInfoFormService.html" data-type="entity-link">PersonalInfoFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PharmacyPageService.html" data-type="entity-link">PharmacyPageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDetailService.html" data-type="entity-link">ProductDetailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductListPageService.html" data-type="entity-link">ProductListPageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PurchaseFeedbackService.html" data-type="entity-link">PurchaseFeedbackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoutingService.html" data-type="entity-link">RoutingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link">SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserHomePageService.html" data-type="entity-link">UserHomePageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileService.html" data-type="entity-link">UserProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link">UtilService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpRequestInterceptor.html" data-type="entity-link">HttpRequestInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpResponseInterceptor.html" data-type="entity-link">HttpResponseInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BasketPageFinalizePurchaseResolver.html" data-type="entity-link">BasketPageFinalizePurchaseResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/BasketPageResolver.html" data-type="entity-link">BasketPageResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CancelPurchaseResolver.html" data-type="entity-link">CancelPurchaseResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CommentListResolver.html" data-type="entity-link">CommentListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CommentResolver.html" data-type="entity-link">CommentResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/DesktopProductSuggestionPageResolver.html" data-type="entity-link">DesktopProductSuggestionPageResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/GeneralHomePageCanActiveGuard.html" data-type="entity-link">GeneralHomePageCanActiveGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginCanActiveGuard.html" data-type="entity-link">LoginCanActiveGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderDetailResolver.html" data-type="entity-link">OrderDetailResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderListResolver.html" data-type="entity-link">OrderListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/PharmacyPageResolver.html" data-type="entity-link">PharmacyPageResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductDetailResolver.html" data-type="entity-link">ProductDetailResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductListPageResolver.html" data-type="entity-link">ProductListPageResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/PurchaseFeedbackResolver.html" data-type="entity-link">PurchaseFeedbackResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/SpecialOfferProductDetailResolver.html" data-type="entity-link">SpecialOfferProductDetailResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StateAndCityResolver.html" data-type="entity-link">StateAndCityResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserHomePageCanActiveGuard.html" data-type="entity-link">UserHomePageCanActiveGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserHomePageResolver.html" data-type="entity-link">UserHomePageResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserProfileResolver.html" data-type="entity-link">UserProfileResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/StateAndCity.html" data-type="entity-link">StateAndCity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeCategoryModel.html" data-type="entity-link">TreeCategoryModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});