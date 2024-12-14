class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        for (int num = i; num <= j; num++) {
            int current = num;
            while (current > 0) {
                if (current % 10 == k) answer++;
                current /= 10;
            }
        }
        return answer;
    }
}