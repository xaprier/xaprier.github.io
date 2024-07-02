import { skeleton } from '../../utils';
import React, { useEffect } from "react";
import Editor from '@monaco-editor/react';

const languages = [
  { name: 'JavaScript', value: 'javascript' },
  { name: 'Python', value: 'python' },
  { name: 'Java', value: 'java' },
  { name: 'C++', value: 'cpp' },
  { name: 'TypeScript', value: 'typescript' },
  { name: 'NASM Assembler x86_64', value: 'assembly'}
];

const defaultCodeBlocks: {[key: string]: string } = {
  javascript: `// JavaScript example
function greet() {
  console.log("Hello, World!");
}

greet(); // call greet function`,
  python: `# Python example
def greet():
    print("Hello, World!")

greet() # call greet function`,
  java: `// Java example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  cpp: `// C++ example
#include <iostream>

void greet() {
    std::cout << "Hello, World!" << '\\n';
}

int main() {
    greet(); // call greet function
}`,
  typescript: `// TypeScript example
function greet(): void {
  console.log("Hello, World!");
}

greet(); // call greet function`,
  assembly: `; Assembly example, there is no color for this language :)
section .data
    hello db 'Hello, World!',10,0

section .text
    global main

main:
    ; Write 'Hello, World!' to stdout
    mov edx, 14      ; message length
    mov ecx, hello   ; message to write
    mov ebx, 1       ; file descriptor (stdout)
    mov eax, 4       ; system call number (sys_write)
    int 0x80         ; call kernel

    ; Exit program
    mov eax, 1       ; system call number (sys_exit)
    xor ebx, ebx     ; exit code 0
    int 0x80         ; call kernel`,
};

interface CodeEditorProps {
  loading: boolean;
}

/**
 * Renders an CodeEditor component.
 * @param loading - A boolean indicating if the profile is loading.
 * @returns JSX element representing the CodeEditor.
 */
const CodeEditor: React.FC<CodeEditorProps> = ({
  loading,
}): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("cpp");
  const [fontSize, setFontSize] = React.useState<number>(18);

  const handleChange = (event: any) => {
    if (!event) return;
    setSelectedLanguage(event.target.value);
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(Number(event.target.value));
  };

  return (
    <div className="card shadow-lg compact bg-base-100 rounded-lg overflow-hidden">
      {loading ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="lg:col-span-2 col-span-1 h-full">
          <div className="grid grid-cols-1 gap-6 h-full">
            <div className="card shadow-lg rounded-lg overflow-hidden">
              <div className="card-header p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Code Editor</h2>
                <div className="flex flex-col sm:flex-row sm:justify-left opacity-80 gap-5">
                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-sm">Select language</h3>
                    <select
                      className="p-1 rounded w-full bg-base-100 sm:w-auto"
                      value={selectedLanguage}
                      onChange={handleChange}
                    >
                      {languages.map((language) => (
                        <option key={language.value} value={language.value}>
                          {language.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-sm">Select font size</h3>
                    <select
                      className="p-1 rounded bg-base-100 w-full sm:w-auto"
                      value={fontSize}
                      onChange={handleFontSizeChange}
                    >
                      {[12, 14, 16, 18, 20, 22, 24].map((size) => (
                        <option key={size} value={size}>
                          {size}px
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Editor
                  height="45vh"
                  theme="vs-dark"
                  language={selectedLanguage}
                  value={defaultCodeBlocks[selectedLanguage]}
                  options={{ fontSize }}
                />
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default CodeEditor;
