SELECT 
    A.APNT_NO, 
    P.PT_NAME, 
    A.PT_NO, 
    D.MCDP_CD, 
    D.DR_NAME, 
    A.APNT_YMD
FROM APPOINTMENT A
JOIN PATIENT P ON A.PT_NO = P.PT_NO
JOIN DOCTOR D ON A.MDDR_ID = D.DR_ID
WHERE A.APNT_YMD >= '2022-04-13 00:00:00' 
  AND A.APNT_YMD < '2022-04-14 00:00:00'
  AND D.MCDP_CD = 'CS'
  AND (A.APNT_CNCL_YN = 'N' OR A.APNT_CNCL_YN IS NULL)
ORDER BY A.APNT_YMD;