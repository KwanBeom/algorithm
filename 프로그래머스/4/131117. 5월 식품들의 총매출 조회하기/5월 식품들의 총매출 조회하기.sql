SELECT FO.PRODUCT_ID, PRODUCT_NAME, SUM(FO.AMOUNT) * PRICE AS TOTAL_SALES
    FROM FOOD_PRODUCT FP
    JOIN FOOD_ORDER FO ON FP.PRODUCT_ID = FO.PRODUCT_ID
    WHERE FO.PRODUCE_DATE BETWEEN '2022-05-01' AND '2022-05-31'
    GROUP BY 1
    ORDER BY TOTAL_SALES DESC, 1