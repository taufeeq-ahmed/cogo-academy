from input_code import solution
import sys
import json


def test_code():
    a = json.loads(sys.argv[1])

    test_cases = {}

    expected = {}
    for test_case in a:
        test_cases[test_case['test_case_id']] = eval(test_case['input'])
        expected[test_case['test_case_id']] = eval(test_case['output'])


    # test_cases_count = len(test_cases)
    passed_test_cases = 0
    result = []

    for id in test_cases.keys():
        try:
            code_result = solution(test_cases[id])
            if code_result == expected[id]:
                passed_test_cases += 1
                result.append(id)
        except:
            result.append("error")

    # status =  "false"
    # if passed_test_cases == len(test_cases):
    #     status = "true"
    # resDict = {
    #     status: status,
    #     result : result 
    # }
    # print(resDict)
    print(json.dumps(result))

    
test_code()