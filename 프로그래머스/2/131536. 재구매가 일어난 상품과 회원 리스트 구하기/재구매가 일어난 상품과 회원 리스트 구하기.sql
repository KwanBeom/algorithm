-- 코드를 입력하세요
SELECT O.USER_ID, O.PRODUCT_ID
    FROM ONLINE_SALE O
    GROUP BY 1, 2
    HAVING COUNT(*) >= 2
    ORDER BY 1, 2 DESC