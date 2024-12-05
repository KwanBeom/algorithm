import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        List<Integer> answer = new ArrayList<>();
        int[] days = new int[progresses.length];
        
        for (int i = 0; i < progresses.length; i++) {
            days[i] = (100 - progresses[i] + speeds[i] - 1) / speeds[i];
        }
        
        int maxDay = days[0];
        int count = 0;
        
        for (int day : days) {
            if (day <= maxDay) {
                count++;
            } else {
                answer.add(count);
                count = 1;
                maxDay = day;
            }
        }
        answer.add(count);
        
        return answer.stream().mapToInt(i -> i).toArray();
    }
}