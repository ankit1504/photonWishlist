const URL = {
  getRequestList: "/task/fofo-display/{storeAliasId}/request-list/v1",
  login: "/users/login/v2",
  getCategoryList: "/stores/{storeAliasId}/inventory/leaf_node/v1",
  getStoreDisplayInfo:
    "/stores/{storeAliasId}/current-display-inventory-summary/v1",
  getCurrentDisplayedItems: "/stores/storeAliasId/display-inventory-list/v1",
  optimiseDisplayItem: "/task/fofo-display/optimize/v1",
  getCurrentSkuList: "/stores/{storeAliasId}/store-inventory-list/v1",
  getStateList: "/stores/address/state/v1",
  getStoreList: "/stores/store-list/v1",
  getBrandList: "/stores/{storeAliasId}/inventory/brand/v1",
  getTaskSkuList: "/task/fofo-display/process/{processId}/sku/v1",
  getRequestDetails: "/task/fofo-display/process/{processId}/v1",
  updateSkuOutcome: "/task/fofo-display/task/{taskId}/save/v1",
  sendCompleteTask: "/task/fofo-display/task/{taskId}/complete/v1",
  getFilterLabels: "/task/fofo-display/process/{processId}/sku/filters/v1",
  getCategoryLastSync: "/stores/{storeAliasId}/display-inventory-summary/v1",
  saveBulkSku: "/task/fofo-display/task/{taskId}/save-bulk/v1",
  exportSku: "/task/fofo-display/process/{processId}/display-request/download/v1",
};

export default URL;
