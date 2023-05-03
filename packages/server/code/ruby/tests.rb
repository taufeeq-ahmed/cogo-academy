require 'json'
$arr = JSON.parse(ARGV[0])
fileName = $arr[0]['fileName']
require_relative './'+fileName+'.rb'

def test_code()
    test_cases = {}
    expected = {}
    a=$arr;
    a.each do |test_case|
        test_cases[test_case['test_case_id']] = test_case['input']
        expected[test_case['test_case_id']] = test_case['output']
    end

    passed_test_cases = 0
    result={}
    passed = []
    conole_result=''
    test_cases.keys.each do |id|
        begin
            code_result = solution(eval(test_cases[id]))
            conole_result=code_result
            if code_result.to_i == expected[id].to_i
                passed_test_cases += 1
                passed.append(id)
            end
        rescue
            result.append('');
        end
    end
    result['passed']=passed;
    result['console_result']=conole_result;
    puts result.to_json
end
test_code()
