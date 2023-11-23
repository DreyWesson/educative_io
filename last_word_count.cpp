#include <iostream>

class Solution {
public:
    int lengthOfLastWord(std::string s) {
        //     int first = 0;
        // int second = 0;
        // while(s[first])
        // {
        //     if (s[first - 1] == ' ' && s[first] != ' ')
        //         second = first;
        //     first++;
        // }
        // first = 0;
        // while(s[second] && s[second] != ' ')
        // {
        //     second++;
        //     first++;
        // }
        // return first;
        int first = s.size() - 1;
        int second;
        int res = 0;
        while (s[first] == ' ' || s[first] == '\t')
            first--;
        second = first + 1;
        while (first != 0 && (s[first] != ' ' || s[first] != '\t'))
            first--;
        if (s[first] == ' ')
            first++;
        return (res);
    }
};

int main(void)
{
    Solution solution;
    solution.lengthOfLastWord("fly ");
    return (0);
}