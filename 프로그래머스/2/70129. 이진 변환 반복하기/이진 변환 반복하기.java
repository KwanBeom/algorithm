class Solution {
    public int[] solution(String s) {
        int[] answer = {0,0};
        String tmp = s;

        while(!tmp.equals("1")) {
            answer[0]++;
            int len = tmp.length();
            int cnt = 0;
            
            for(int i=0; i<len; i++) {
                if(tmp.charAt(i) == '0') {
                    answer[1]++;
                } else {
                    cnt++;
                }
            }

            tmp = Integer.toBinaryString(cnt);
        }
        
        return answer;
    }
}