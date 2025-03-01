import java.util.*;

class Solution {
    public int indexOf(Integer[] arr, int target) {
        int result = -1;
        for(int i=0; i<arr.length; i++) {
            if(arr[i] == target) {
                result = i;
                break;
            }    
        } 
        
        return result;
    }
    
    public int[] solution(int[][] score) {
        int[] answer = new int[score.length];
        int[] avg = new int[score.length];
        
        for(int i=0; i<score.length; i++) {
            avg[i] = (score[i][0] + score[i][1]) / 2;
        }
        Integer[] avgSort = Arrays.stream(avg.clone()).boxed().toArray(Integer[]::new);
        Arrays.sort(avgSort, Collections.reverseOrder());
        for(int i=0; i<avg.length; i++) {
            answer[i] = indexOf(avgSort, avg[i]) + 1;
        }
        return answer;
    }
}