-- 코드를 입력하세요
SELECT AI.ANIMAL_ID, AI.ANIMAL_TYPE, AI.NAME
    FROM ANIMAL_INS AI
    JOIN ANIMAL_OUTS AO ON AI.ANIMAL_ID = AO.ANIMAL_ID
    WHERE NOT AI.SEX_UPON_INTAKE REGEXP '^Spayed|^Neutered'
        AND AO.SEX_UPON_OUTCOME REGEXP '^Spayed|^Neutered'