#include <iostream>

struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode* middlePoint(ListNode* head){
    ListNode* liebre = head;
    ListNode* tortuga = head;

    while(liebre != nullptr && liebre->next != nullptr){
        liebre = liebre->next->next;
        tortuga = tortuga->next;
    }
    return tortuga;
}