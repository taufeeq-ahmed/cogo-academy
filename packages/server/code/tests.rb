require 'json'
require_relative './input_code.rb'

def test_code
    a = JSON.parse(ARGV[0])

    test_cases = {}
    expected = {}
    a.each do |test_case|
        test_cases[test_case['test_case_id']] = test_case['input']
        expected[test_case['test_case_id']] = test_case['output']
    end

    # test_cases.each do |k,v|
    #     puts "#{k}:#{v}"
    # end


    passed_test_cases = 0
    result = []

    test_cases.keys.each do |id|
        begin
            code_result = solution(eval(test_cases[id]))
            puts code_result
            puts expected[id]
            if code_result == expected[id]
                passed_test_cases += 1
                result.append(id)
            end
        rescue
            result.append('error')
        end
    end

    # status = 'false'
    # if passed_test_cases == test_cases.length
    #     status = 'true'
    # end

    # resDict = {
    #     'status' => status,
    #     'result' => result
    # }
    puts result.to_json
    end

test_code
