import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int[] num_list) {
        int sum = (int)Math.pow(Arrays.stream(num_list).sum(), 2);
        int multiple = Arrays.stream(num_list).reduce(1, (a,b)->a*b);
        return sum > multiple ? 1 :0;
    }
}