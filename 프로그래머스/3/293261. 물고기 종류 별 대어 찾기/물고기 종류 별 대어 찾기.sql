WITH MAX_FISH AS (
    SELECT
        FI.FISH_TYPE, MAX(FI.LENGTH) AS LENGTH, FNI.FISH_NAME
    FROM
        FISH_INFO FI
    JOIN FISH_NAME_INFO FNI
        ON FNI.FISH_TYPE = FI.FISH_TYPE
    GROUP BY 
        FI.FISH_TYPE, FNI.FISH_NAME
)
SELECT ID, FISH_NAME, M.LENGTH
    FROM MAX_FISH M
    JOIN FISH_INFO F
    ON M.FISH_TYPE = F.FISH_TYPE AND M.LENGTH = F.LENGTH