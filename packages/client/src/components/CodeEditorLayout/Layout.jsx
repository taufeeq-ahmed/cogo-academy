import React, { Fragment, useEffect, useState } from 'react'
import CodeEditorWindow from '../../components/editor/Editor'
import EditorInstruction from './editor_instruction'
import EditorCanvas from './editor_canvas'
import EditorConsole from './editor_console'
import { Dialog, Transition } from '@headlessui/react'
// import InstructionIcon from '../../assets/icons/instruction_icon'
// import CanvasIcon from '../../assets/icons/canvas_icon'
// import ConsoleIcon from '../../assets/icons/console_icon'
import { CheckIcon } from '@heroicons/react/24/outline'
import Button, { ButtonWithIcon } from '../../components/button'
import Layout from '../layout'
import app_api from '../../config'
import EditorData from './editor_data'

const EditorLayoutCode = ({
  id,
  user,
  courseContentId,
  instruction,
  initialCode,
  testCases,
  goToNext,
  markContentComplete,
  language,
}) => {
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [html, setHtml] = useState('')
  const [srcDoc, setSrcDoc] = useState(initialCode)
  const [editorLayout, setEditorLayout] = useState('instruction')
  const [congrats, setCongrats] = useState(false)

  const [dataOutput, setDataOutput] = useState({})
  const [dataLoading, setDataLoading] = useState(false)
  const [dataError, setDataError] = useState(null)

  const [startTime, setStartTime] = useState(new Date().getTime())

  const [result, setResult] = useState([])

  useEffect(() => {
    if (language === 'sql' && srcDoc) {
      if (srcDoc.match(/insert|update|delete/i)) {
        setDataLoading(false)
        setDataError('Cannot change table detail for now')
      } else {
        setDataLoading(true)
        const getData = setTimeout(() => {
          app_api
            .post(`sql-test/run`, { code: srcDoc })
            .then((res) => {
              if (res.data.success) {
                setDataLoading(false)
                setDataError(null)
                setDataOutput(res.data.data)
              } else {
                setDataLoading(false)
                setDataError(res.data.message)
              }
            })
            .catch((err) => {
              // console.log(err);
              setDataLoading(false)
              setDataError(err?.response?.data.message)
            })
        }, 1500)
        return () => clearTimeout(getData)
      }
    }
  }, [srcDoc])

  const loadEditorLayout = {
    instruction: <EditorInstruction content={instruction} />,
    console: (
      <EditorConsole
        content={initialCode && srcDoc === '' ? initialCode : srcDoc}
      />
    ),
    data: (
      <EditorData
        loading={dataLoading}
        error={dataError}
        data={dataOutput.data}
        headers={dataOutput.headers}
      />
    ),
    canvas: (
      <EditorCanvas
        content={initialCode && srcDoc === '' ? initialCode : srcDoc}
      />
    ),
    testCase: (
      <div className="w-full h-full px-2 py-2 overflow-y-scroll">
        {testCases?.map((testCase, index) => {
          return (
            <p
              className={`border-1 border rounded-lg my-2 p-2 ${
                result.find((t) => t?.text === testCase.text)?.status ===
                'success'
                  ? 'border-green-300 bg-green-200 text-green-600'
                  : result.find((t) => t?.text === testCase.text)?.status ===
                    'failed'
                  ? 'border-red-300 bg-red-200 text-red-600'
                  : ''
              }`}
              key={index}
              dangerouslySetInnerHTML={{ __html: testCase.text }}
            ></p>
          )
        })}
      </div>
    ),
  }

  useEffect(() => {
    setStartTime(new Date().getTime())
    setResult([])
  }, [courseContentId])

  useEffect(() => {
    setSrcDoc(initialCode)
  }, [initialCode])

  const onSubmit = () => {
    let now = new Date().getTime()
    setEditorLayout('testCase')
    setProcessing(true)
    app_api
      .put(
        `course-content/submit/user/${user?.data?.id}/courseContent/${courseContentId}`,
        { code: srcDoc, timeSpent: now - startTime }
      )
      .then((res) => {
        setStartTime(now)
        setProcessing(false)
        let data = res.data.data
        if ('id' in data) {
          let theResult = result
          if (theResult.length > 0) {
            theResult = theResult.map((t) => ({ ...t, status: 'success' }))
          } else {
            theResult = testCases.map((t) => ({
              text: t.text,
              status: 'success',
            }))
          }
          setResult(theResult)
          markContentComplete(courseContentId, 'COMPLETED', { code: srcDoc })
          setCongrats(true)
        } else {
          markContentComplete(courseContentId, 'PENDING', { code: srcDoc })
          setResult(data)
        }
      })
      .catch((err) => {
        setProcessing(false)
      })
  }

  return (
    <>
      <Layout
        actionButton={
          <Button
            className="w-auto bg-green-600"
            onClick={onSubmit}
            loading={processing}
          >
            Submit
          </Button>
        }
      >
        <div className="relative pt-5">
          <CodeEditorWindow
            height={'92vh'}
            onChange={setSrcDoc}
            language={language}
            code={initialCode && srcDoc === '' ? initialCode : srcDoc}
          />
        </div>

        <div className="flex flex-wrap items-center my-3 justify-evenly ">
          <ButtonWithIcon
            className="mt-2"
            variant={editorLayout === 'instruction' ? 'primary' : 'outlined'}
            title="Instruction"
            onClick={() => setEditorLayout('instruction')}
            // icon={<InformationCircleIcon className="w-5 h-5" />}
          />
          {language === 'javascript' ? (
            <ButtonWithIcon
              className="mt-2"
              variant={editorLayout === 'console' ? 'primary' : 'outlined'}
              title="Console"
              onClick={() => setEditorLayout('console')}
              // icon={<RectangleGroupIcon className="w-5 h-5" />}
            />
          ) : language === 'sql' ? (
            <ButtonWithIcon
              className="mt-2"
              variant={editorLayout === 'data' ? 'primary' : 'outlined'}
              title="Data"
              onClick={() => setEditorLayout('data')}
              // icon={<RectangleGroupIcon className="w-5 h-5" />}
            />
          ) : (
            <ButtonWithIcon
              className="mt-2"
              variant={editorLayout === 'canvas' ? 'primary' : 'outlined'}
              title="Canvas"
              onClick={() => setEditorLayout('canvas')}
              // icon={<RectangleGroupIcon className="w-5 h-5" />}
            />
          )}
          <ButtonWithIcon
            className="mt-2"
            variant={editorLayout === 'testCase' ? 'primary' : 'outlined'}
            title="Test Cases"
            onClick={() => setEditorLayout('testCase')}
            // icon={<CubeTransparentIcon className="w-5 h-5" />}
          />
        </div>
        {loadEditorLayout[editorLayout]}
      </Layout>
      <Transition.Root show={congrats} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setCongrats}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                      <CheckIcon
                        className="w-6 h-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Congratulations!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You've successfully completed this exercise.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => {
                        setCongrats(false)
                        goToNext()
                      }}
                    >
                      Go to next
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
export default EditorLayoutCode;
