-- 코드를 입력하세요
SELECT 
    ORDER_ID, 
    PRODUCT_ID, 
    # IF(OUT_DATE IS NULL, "", DATE_FORMAT(OUT_DATE, "%Y-%m-%d")) AS OUT_DATE,
    DATE_FORMAT(OUT_DATE, "%Y-%m-%d") AS OUT_DATE,
    IF(
        OUT_DATE IS NULL, "출고미정", 
        IF(DATE_FORMAT(OUT_DATE, "%Y-%m-%d") <= "2022-05-01", "출고완료", "출고대기")
    ) AS "출고여부"
    FROM FOOD_ORDER
    ORDER BY ORDER_ID ASC;