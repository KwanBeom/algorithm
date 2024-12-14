class Solution {
    public int solution(String before, String after) {
        StringBuilder sb = new StringBuilder(after);
        for(char c: before.toCharArray()) {
            int idx = sb.indexOf(String.valueOf(c));
            if(idx >= 0) sb.deleteCharAt(idx);
        }
        return sb.length() == 0 ? 1 : 0;
    }
}