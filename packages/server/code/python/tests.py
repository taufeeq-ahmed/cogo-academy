# from input_code import solution
import sys
import json
import importlib
a = json.loads(sys.argv[1])

import importlib
# Define the dynamic file name
file_name = a[0]['fileName']

# Remove the .py extension if present
if file_name.endswith(".py"):
    module_name = file_name[:-3]
else:
    module_name = file_name

# Import the module dynamically
module = importlib.import_module(module_name)

solution = getattr(module, "solution")

def test_code():
    

    test_cases = {}
    expected = {}
    for test_case in a:
        test_cases[test_case['test_case_id']] = eval(test_case['input'])
        expected[test_case['test_case_id']] = eval(test_case['output'])

    # test_cases_count = len(test_cases)
    passed_test_cases = 0
    result={}
    passed = []
    conole_result=''
    for id in test_cases.keys():
        try:
            code_result = solution(test_cases[id])
            conole_result=code_result
            if code_result == expected[id]:
                passed_test_cases += 1
                passed.append(id)
        except:
            passed.append("")

    result['passed']=passed;
    result['console_result']=conole_result;
    print(json.dumps(result))

    
test_code()
