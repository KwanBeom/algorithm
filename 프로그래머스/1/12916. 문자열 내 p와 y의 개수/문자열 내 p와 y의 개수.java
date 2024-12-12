class Solution {
    boolean solution(String s) {
        char[] ca = s.toCharArray();
        int p = 0;
        int y = 0;
        
        for(int i=0; i<ca.length; i++) {
            if(ca[i] == 'p' || ca[i] == 'P') p++;
            if(ca[i] == 'y' || ca[i] == 'Y') y++;
        }
        
        if(p == 0 && y == 0) return true;

        return p == y;
    }
}