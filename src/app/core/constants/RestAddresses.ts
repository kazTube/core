export class RestAddresses {

    static readonly OTP = 'https://api.daroopin.com/api/v1/auth/otp';
    static readonly LOGIN = 'https://api.daroopin.com/api/v1/auth/login';
    private static baseV2 = 'https://api.daroopin.com/api/v2/DrugstoreWeb/';
    private static baseCustomerClubWeb = 'https://api.daroopin.com/api/v1/CustomerClubWeb/';


    static readonly GET_CATEGORY_MENU = RestAddresses.baseV2 + 'GetCategoryMenu';
    static readonly GET_TOP_CATEGORY_LIST = RestAddresses.baseV2 + 'GetTopCategory';
    // comments rest addresses
    static readonly GET_COMMENT_LIST = RestAddresses.baseV2 + 'getCommentList';
    static readonly INSERT_COMMENT = RestAddresses.baseV2 + 'InsertComment';
    static readonly LIKE_OR_DISLIKE_COMMENT = RestAddresses.baseV2 + 'LikeOrDisLikeComment';
    static readonly DELETE_COMMENT = RestAddresses.baseV2 + 'DeleteComment';
    // basket rest addresses
    static readonly GET_USER_BASKET = RestAddresses.baseV2 + 'getUserBasket';
    static readonly REMOVE_ITEM_FROM_BASKET = RestAddresses.baseV2 + 'RemoveBasketItem';
    static readonly SYNC_BASKET = RestAddresses.baseV2 + 'SyncBasket';
    // order rest addresses
    static readonly HAS_OPEN_ORDER = RestAddresses.baseV2 + 'HasOpenOrder';
    static readonly GET_USER_ORDER_LIST = RestAddresses.baseV2 + 'getUserOrderList';
    static readonly SEND_FEEDBACK_IN_FAILURE = RestAddresses.baseV2 + 'sendFeedBackInFailure';
    static readonly GET_CANCELED_PREDEFINED_COMMENT_LIST = RestAddresses.baseV2 + 'GetCanceledPredefinedCommentList';
    static readonly CANCEL_ORDER_BY_USER = RestAddresses.baseV2 + 'CancelOrderByUser';
    static readonly GET_PURCHASE_PREDEFINED_COMMENT_LIST = RestAddresses.baseV2 + 'GetFinalizedPredefinedCommentList';
    static readonly SEND_PURCHASE_FEEDBACK = RestAddresses.baseV2 + 'RateAndSendFeedBackInSuccess';
    static readonly GET_ORDER_DETAIL = RestAddresses.baseV2 + 'getOrderDetail';
    static readonly INSERT_ORDER = RestAddresses.baseV2 + 'InsertOrder';
    static readonly ID_PAY_PAYMENT = RestAddresses.baseV2 + 'IdPayPayment';
    // user info rest address
    static readonly UPDATE_PROFILE = RestAddresses.baseV2 + 'updateProfile';
    static readonly GET_PROFILE = RestAddresses.baseV2 + 'GetProfile';
    // user address rest addresses
    static readonly ADD_ADDRESS = RestAddresses.baseV2 + 'AddAddress';
    static readonly UPDATE_ADDRESS = RestAddresses.baseV2 + 'UpdateAddress';
    static readonly REMOVE_ADDRESS = RestAddresses.baseV2 + 'RemoveAddress';
    static readonly SET_DEFAULT_ADDRESS = RestAddresses.baseV2 + 'SetDefaultAddress';
    static readonly GET_STATE_LIST = RestAddresses.baseV2 + 'GetStateList';
    static readonly GET_CITY_LIST = RestAddresses.baseV2 + 'GetCityList';
    // product rest addresses
    static readonly GET_PRODUCT_BY_CODE = RestAddresses.baseV2 + 'GetProductByCode';
    static readonly GET_PRODUCT_BY_CATEGORY_ID = RestAddresses.baseV2 + 'GetProductListByCategoryId';
    static readonly GET_SIMILAR_PRODUCT_LIST = RestAddresses.baseV2 + 'GetSimilarProductList';
    static readonly GET_RELATED_PRODUCT_LIST = RestAddresses.baseV2 + 'GetRelativeProductList';
    static readonly GET_YOU_MAY_NEED_PRODUCT_LIST = RestAddresses.baseV2 + 'MaybeYouRequiredProductList';
    static readonly GET_BEST_SELLING_PRODUCT_LIST = RestAddresses.baseV2 + 'BestSelling';
    static readonly SEARCH_PRODUCT = RestAddresses.baseV2 + 'SearchProduct';
    static readonly SEARCH_PRODUCT_IN_CATEGORY = RestAddresses.baseV2 + 'SearchProductInCategory';
    static readonly GET_TOP_PRODUCT_LIST = RestAddresses.baseV2 + 'GetTopProductList';
    static readonly ADD_NEW_PRODUCT_TO_SERVER = RestAddresses.baseV2 + 'InsertNewProductByUser';
    static readonly GET_ALL_PRODUCT_UNIT_LIST = RestAddresses.baseCustomerClubWeb + 'GetAllUnit';

    // user home
    static readonly GET_MAIN_PAGE = RestAddresses.baseCustomerClubWeb + 'GetMainPage';

    // pharmacy
    static readonly GET_PHARMACY_VITRIN = RestAddresses.baseCustomerClubWeb + 'getPharmacyVitrin';
    static readonly GET_PHARMACY_INFO = RestAddresses.baseV2 + 'GetPharmacyInfo';
    static readonly SEARCH_IN_PHARMACY_PRODUCTS = RestAddresses.baseCustomerClubWeb + 'searchInPharmacyProducts';
    static readonly IS_UNSUBSCRIPTION_ALLOWED = RestAddresses.baseCustomerClubWeb + 'isUnsubscriptionAllowed';
    static readonly SUBSCRIBE_TO_PHARMACY = RestAddresses.baseCustomerClubWeb + 'subscribeToPharmacy';
    static readonly GET_PHARMACY_SPECIAL_OFFER_PRODUCT_LIST = RestAddresses.baseCustomerClubWeb + 'GetPharmacySpecialOfferProductList';


}
