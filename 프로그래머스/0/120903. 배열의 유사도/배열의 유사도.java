import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(String[] s1, String[] s2) {
        Set<String> interSet = Arrays.stream(s1).collect(Collectors.toSet());
        Set<String> stSet2 = Arrays.stream(s2).collect(Collectors.toSet());
        interSet.retainAll(stSet2);
        return interSet.size();
    }
}