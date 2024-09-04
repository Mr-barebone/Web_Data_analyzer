class compositeCols:

    MAX_COLS: list = [
        "Channel",
        "family",
        "sub_family",
        "supplier",
        "category_name",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "status",
        "ENDOFLife",
        "description",
        "ITEMID",
        "budget_month",
        "budget_week",
        "Budget_date",
        "INVENTLOCATIONID",
        "Store",
    ]

    AVG_COLS: list = [
        "final_price",
        "act_forecast_vs_budget_percent",
        "SalesActualsByForecast",  # 'LYvsACT_FCT_percent',
        # 'initial_average_retail_price',
        "proposed_sellthru_percent",
        "retail_value_including_markdown",
        "budget_gross_margin_percent",
        "Logistic%",
        "adjusted_budget_gross_margin_percent",
        "MarkdownValue",
        "markdown_percent",
        "adjusted_markdown_percent",
        "adjusted_sellthru_percent",
        "DisplayItemValue",
        "DisplayItemQty",
        "COR_EOLStock_value",
        "otb_retail_value_at_gross_sale",  #'ly_margin_percent'
    ]

    SUM_COLS: list = [
        "budget_amount",
        "budget_cost",
        "deficit",
        "Original_BudgetAmount",
        "budget_percent",
        "relative_budget_percent",
        "History_Net_Sales",
        # 'budget_vpy', 'budget_vppy',
        "budget_qty",
        "ACT_FCT",
        "Original_BudgetCostofGoods",
        "PO",
        "COSTPRICE",
        "Historical_Gross_Margin",
        "sales_actual",
        "stock_on_hand_qty",
        # 'PurchasedRetailValueGrossSale','StockatRetailPrice',
        "StockatCostPrice",
        "net_sales_ly",
        "net_sales_lly",
        "gross_sales_ly",
        # 'GrossSales',
        # 'gross_sales',
        "initial_average_retail_price",
        "total_sku_count",
        "ly_customer_disc",
        "SupplyCost",
        "SALESQTY",
        # 'TYForecast',
        # 'PurchaseRetailValueatGrossSale',
        # 'OTBorPurchaseCost','OTBquantity',
        # ~~QTY_COl
        "Budget_Qty_Perc",
        "budget_qty_act_fct_percent",
        "budget_vs_py_qty_percent",
        "budget_vs_ppy_qty_percent",
        "QTY_Buy_By_SKU",
        # 'total_sku_count',
        "total_sku_count_ty",
        "total_sku_count_lly",
        "total_sku_count_ly",
        "quantity_mix_percent",
        "quantity_act_forecast",
        "quantity_act_forecast_vs_budget_percent",
        "sold_qty_ly",
        "quantity_act_forecast_vs_ly_percent",
        "quantity_act_or_forecast_per_sku",
        "quantity_act_forecast_vs_ppy_percent",
        # ~~COST_COL
        # 'stock_cost_ly',
        "budget_cost_percent",
        "budget_vs_act_forecast_cost_percent",
        "cost_budget_per_sku",
        "BudgetCostofGoods",
        "budget_vs_py_cost_percent",
        "budget_vs_ppy_cost_percent",
        "cost_mix_percent",
        "cost_actuals",
        "cost_of_goods_ly",
        "cost_act_forecast",
        "cost_act_forecast_vs_budget_perc",
        "cost_act_forecast_vs_ly_percent",
        "cost_act_forecast_vs_ppy_percent",
        "cost_act_or_forecast_per_sku",
        # ~~MGN COL
        "budget_margin_percent",
        "budget_margin_mix_percent",
        "budget_vs_act_forecast_margin_percent",
        # 'budget_vs_py_margin_percent', 'budget_vs_ppy_margin_percent',
        # 'retail_price',
        # 'ly_margin',
        # 'margin_act_forecast_vs_ly_percent',
        # 'margin_act_forecast_vs_ppy_percent',
        # 'margin_act_or_forecast_per_sku',
        # 'lly_margin', 'margin_budget_per_sku',
        "margin_actuals",
        "margin_act_forecast",
        # units_per_sku
        "units_per_sku_total",
        # 'units_per_sku_ly',
        #  'SALES_ACT_FCT_per_sku_ly',
        "units_per_sku_lly",
        #  'SALES_ACT_FCT_per_sku_lly',
        # units_buy_by_sku
        "unit_buy_by_sku_total",
        "unit_buy_by_sku_ly",
        "unit_buy_by_sku_lly",
        # Retail price
        "initial_average_retail_price_ly",
        "initial_average_retail_price_lly",
        # budget/ sku
        "budget_per_sku",
        # qty cols
        "budget_qty_ty",
        "supply_retail_value",
        "stock_cost_ly",
        "gross_sales",
        # 'budget_qty_ly', 'budget_qty_ty', 'budget_qty_lly', #'stock_on_hand_qty_ly', 'stock_on_hand_qty_lly',
        # budget costs
        # 'budget_cost_ty','budget_cost_ly', 'budget_cost_lly'
        # 'FirstMargin_percent'
    ]


class conversionCols:

    FLOAT_COLS: list = [
        "final_price",
        "initial_average_retail_price",
        "budget_percent",
        "deficit",
        "relative_budget_percent",
        "act_forecast_vs_budget_percent",
        "Historical_Gross_Margin",
        "SalesActualsByForecast",
        "budget_gross_margin_percent",
        "adjusted_budget_gross_margin_percent",
        "budget_vpy",
        "budget_vppy",
        "proposed_sellthru_percent",
        "FirstMargin_percent",
        "StockatRetailPrice",  #'PurchasedRetailValueGrossSale',
        "PurchaseRetailValueatGrossSale",
        "TYForecast",
        "Logistic%",
        "markdown_percent",
        "LYvsACT_FCT_percent",
        "PO",
        "OTBorPurchaseCost",
        "budget_qty",
        "OTBquantity",
    ]
    # 'History_Net_Sales' ,
    INT_COLS: list = ["sales_actual"]
    # ,'unit_buy_by_sku', 'SKU_COUNT', 'unit_buy_by_sku_total', 'BudgetCostofGoods', 'COSTPRICE',
    # 'Displ#ayItem', 'COR_EOLStock_value', 'COSTPRICE']


class performanceCols:

    SCORES: dict = {
        "sale": "article_score_sale",
        "abc": "article_score_abc",
        "ae": "article_score_ae",
        "speed": "article_score_speed",
        "terminal": "article_score_terminal",
        "margin": "article_score_margin",
        "sell": "article_score_sell",
        "markdown": "article_score_markdown",
        "core": "article_score_core",
        "quartile": "article_score_quartile",
        "sortimeter": "article_score_sortimeter",
    }

    ARTICLE_SCORES: list = [
        "sale",
        "abc",
        "ae",
        "speed",
        "terminal",
        "margin",
        "sell",
        "markdown",
        "core",
        "quartile",
        "sortimeter",
    ]

    RANK_COLS: list = ["Check_box"]


class functionalFields:

    HEIRARCHY: list = [
        "Channel",
        "family",
        "sub_family",
        "supplier",
        "category_name",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "status",
        "ENDOFLife",
        "description",
        "ITEMID",
    ]
    # SUB_FILTER: dict  = {'region':[], 'season':[], 'area':[], 'budget_year':[],'historical_year':[],'month':[],'week':[],'date':[], 'article_scores' : []}

    SUB_FILTER = {
        "store": [],
        "region": [],
        "season": [],
        "area": [],
        "Channel": [],
        "budget_year": [],
        "Quarter": [],
        "month": [],
        "week": [],
        "date": [],
        "Day": [],
        "historical_year": [],
        "history_Quarter": [],
        "history_month": [],
        "history_week": [],
        "history_Day": [],
        "history_dates": [],
        "article_score": [],
    }
    # 'Channel', 'Region', 'INVENTLOCATIONID', 'Store', 'Department',  'Family', 'SubFamily',
    #                                        'supplier','category_name', 'dom_comm',  'sub_category', 'extended_sub_category', 'sub_category_supplier', 'assembly_code_nickname','status', 'ENDOFLife',
    #    'description','ITEMID','historical_year', 'Budget_Year','Quarter','Month','Week','Budget_date','Day',
    PERCENT_COLS: list = [
        "new_budget_mix",
        "budget_percent",
        "relative_budget_percent",
        "act_forecast_vs_budget_percent",
        "budget_gross_margin_percent",
        "adjusted_budget_gross_margin_percent",
        "Logistic%",
        "markdown_percent",
        "adjusted_markdown_percent",
        "FirstMargin_percent",
        "proposed_sellthru_percent",
        "adjusted_sellthru_percent",
        "LYvsACT_FCT_percent",
        "coefficient_score_mix_percent",
        "budget_vpy",
    ]

    EDITABLE_COLS: list = [
        "budget_percent",
        "budget_qty",
        "adjusted_budget_gross_margin_percent",
        "adjusted_markdown_percent",
        "Logistic%",
        "adjusted_sellthru_percent",
        "DisplayItemQty",
        "COR_EOLStock_value",
    ]

    # , 'order_index'


class TABS:

    BudgetValue = [
        "Check_box",
        "Channel",
        "Region",
        "INVENTLOCATIONID",
        "Store",
        "Department",
        "family",
        "sub_family",
        "supplier",
        "category_name",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "status",
        "ENDOFLife",
        "description",
        "ITEMID",
        "historical_year",
        "history_quarter",
        "history_month",
        "history_week",
        "history_day",
        "INVOICEDATE",
        "Budget_Year",
        "budget_quarter",
        "budget_month",
        "budget_week",
        "Budget_date",
        "budget_day",
        # KPI
        "revised_budget_amount",
        "new_budget_mix",
        "budget_amount",
        "budget_percent",
        "BudgetCostofGoods",
        "budget_qty",
        "budget_gross_margin_percent",
        "adjusted_budget_gross_margin_percent",
        "Logistic%",
        "SupplyCost",
        "FirstMargin_percent",
        "supply_retail_value",
        "markdown_percent",
        "adjusted_markdown_percent",
        "retail_value_including_markdown",
        "MarkdownValue",
        "proposed_sellthru_percent",
        "adjusted_sellthru_percent",
        "StockatRetailPrice",
        "StockatCostPrice",
        # "PurchasedRetailValueGrossSale",
        "PurchaseRetailValueatGrossSale",
        "DisplayItemQty",
        "DisplayItemValue",
        "COR_EOLStock_value",
        "TYForecast",
        "otb_retail_value_at_gross_sale",
        "OTBorPurchaseCost",
        "OTBquantity",
        "stock_on_hand_qty",
        "initial_average_retail_price",
        "total_sku_count",
        "units_per_sku_total",
        "budget_per_sku",
        "sales_actual",
        "ACT_FCT",
        "act_forecast_vs_budget_percent",
        "net_sales_ly",
        "cost_of_goods_ly",
        "stock_cost_ly",
        "gross_sales_ly",
        "ly_margin_percent",
        "budget_vpy",
        "LYvsACT_FCT_percent",
        "initial_average_retail_price_ly",
        "unit_buy_by_sku_ly",
        "SALES_ACT_FCT_per_sku_ly",
        "total_sku_count_ly",
        "net_sales_lly",
        "LLYvsACT_FCT_percent",
        "initial_average_retail_price_lly",
        "unit_buy_by_sku_lly",
        "SALES_ACT_FCT_per_sku_lly",
        "total_sku_count_lly",
        "final_price",
    ]

    BudgetCost = [
        "Channel",
        "Region",
        "INVENTLOCATIONID",
        "Store",
        "Department",
        "category_name",
        "family",
        "sub_family",
        "supplier",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "ITEMID",
        "status",
        "ENDOFLife",
        "description",
        "Budget_Year",
        "historical_year",
        "BudgetCostofGoods",
        "budget_vs_py_cost_percent",  # 'budget_vs_ppy_cost_percent',
        "cost_mix_percent",
        "cost_actuals",
        "cost_act_forecast",
        "cost_act_forecast_vs_budget_perc",
        "cost_of_goods_ly",
        "cost_act_forecast_vs_ly_percent",
        # 'cost_of_goods_lly',
        # 'cost_act_forecast_vs_ppy_percent',
        "cost_act_or_forecast_per_sku",
        "stock_cost_ly",
    ]

    BudgetQuantity = [
        "Channel",
        "Region",
        "INVENTLOCATIONID",
        "Store",
        "Department",
        "category_name",
        "family",
        "sub_family",
        "supplier",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "ITEMID",
        "status",
        "ENDOFLife",
        "description",
        "Budget_Year",
        "historical_year",
        "budget_qty",
        "Budget_Qty_Perc",
        "budget_qty_act_fct_percent",
        "budget_vs_py_qty_percent",
        "budget_vs_ppy_qty_percent",
        "QTY_Buy_By_SKU",
        # 'Quantity_Buy_By_SKU',
        "total_sku_count",
        "unit_buy_by_sku_total",
        "SKU_COUNT",
        "quantity_mix_percent",
        "quantity_actuals",
        "quantity_act_forecast",
        "quantity_act_forecast_vs_budget_percent",
        "sold_qty_ly",
        "quantity_act_forecast_vs_ly_percent",
        "quantity_act_or_forecast_per_sku",
        "quantity_ppy",
        "quantity_act_forecast_vs_ppy_percent",
    ]

    BudgetMargin = [
        "Channel",
        "Region",
        "INVENTLOCATIONID",
        "Store",
        "Department",
        "category_name",
        "family",
        "sub_family",
        "supplier",
        "dom_comm",
        "sub_category",
        "extended_sub_category",
        "sub_category_supplier",
        "assembly_code_nickname",
        "ITEMID",
        "status",
        "ENDOFLife",
        "description",
        "Budget_Year",
        "historical_year",
        "budget_margin_percent",
        "budget_margin_mix_percent",
        # 'retail_price',
        "budget_vs_act_forecast_margin_percent",
        "budget_vs_py_margin_percent",
        "budget_vs_ppy_margin_percent",
        "ly_margin",
        "margin_act_forecast_vs_ly_percent",
        "total_sku_count",
        "margin_budget_per_sku",
        "margin_act_or_forecast_per_sku",
        "lly_margin",
        "margin_act_forecast_vs_ppy_percent",
        "margin_actuals",
        "margin_act_forecast",
        "budget_gross_margin_percent",
        "Historical_Gross_Margin",
        "adjusted_budget_gross_margin_percent",
        "FirstMargin_percent",
        "proposed_sellthru_percent",
    ]

class filterCols:
    
    time_columns = ["historical_year", "Budget_Year"]

    filter_details = {
        "sales_channel": "Channel",
        "product_family": "family",
        "sub_families": "sub_family",
        "category": "category_name",
        "sub_category": "sub_category",
        "suppliers": "supplier",
        "sku": "ITEMID",
    }
