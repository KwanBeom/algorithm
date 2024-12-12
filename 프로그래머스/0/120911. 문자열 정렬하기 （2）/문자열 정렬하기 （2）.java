import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string) {
        char[] strArr = my_string.toLowerCase().toCharArray();
        Arrays.sort(strArr);
        return new String(strArr);
    }
}