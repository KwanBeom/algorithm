SELECT b.category, sum(sales) as total_sales
    FROM book b
    JOIN book_sales bs ON b.book_id = bs.book_id
    WHERE DATE_FORMAT(bs.sales_date, "%Y-%m") = "2022-01"
    GROUP BY 1
    ORDER BY 1;