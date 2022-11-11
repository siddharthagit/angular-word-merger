import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-merger',
  templateUrl: './word-merger.component.html'
})
export class WordMergerComponent implements OnInit {
  word1: string;
  word2: string;
  word3: string;
  word4: string;
  isFormError: boolean = false;
  allowedStringLn: number = 25;
  listOfGeneratedWords = Array<string>();
  constructor() { }

  ngOnInit() {
    this.word1 = "";
    this.word2 = "";
    this.word3 = "";
    this.word4 = "";
  }

  combineWords() {
    //reset the form
    this.resetForm();

    let resultArray = Array<string>();
    let resultArrayExtra = Array<string>();

    if (this.word1.length > this.allowedStringLn || this.word2.length > this.allowedStringLn || this.word3.length > this.allowedStringLn || this.word4.length > this.allowedStringLn) {
      this.isFormError = true;
    }
    else {
      this.listOfGeneratedWords.push(this.word1);
      this.listOfGeneratedWords.push(this.word2);
      this.listOfGeneratedWords.push(this.word3);
      this.listOfGeneratedWords.push(this.word4);
      resultArray = this.tryCombine(this.word1, this.word2);
      let removeDuplicates = (names) => names.filter((v, i) => names.indexOf(v) === i)
      removeDuplicates(resultArray);

      //use word3
      if (this.word3 != null) {
        let lenword3 = resultArray.length;
        for (let counter = 1; counter < lenword3; counter++) {
          resultArrayExtra = this.tryCombine(resultArray[counter], this.word3);
        }
      }
      resultArray = resultArray.concat(resultArrayExtra);
      removeDuplicates(resultArray);

      //use word4
      resultArrayExtra = [];
      if (this.word4 != null) {
        let lenword4 = resultArray.length;
        for (let counter = 1; counter < lenword4; counter++) {
          resultArrayExtra = this.tryCombine(resultArray[counter], this.word4);
        }
      }
      resultArray = resultArray.concat(resultArrayExtra);
      removeDuplicates(resultArray);

      this.listOfGeneratedWords = this.listOfGeneratedWords.concat(resultArray);
    }
  }

  private tryCombine(source1: string, source2: string): Array<string> {
    let lenSource1 = source1.length;
    let resultArray = new Array<string>();
    for (let counter = 1; counter <= lenSource1; counter++) {
      console.log("tryCombine " + counter);
      let prefix = source1.substr(0, counter);
      console.log("tryCombine prefix = " + prefix);
      let thisResult: Array<string> = this.tryCombineWithPrefix(prefix, source2);
      console.log("tryCombine thisResult = " + thisResult);
      resultArray = resultArray.concat(thisResult);
    }
    return resultArray;
  }

  private tryCombineWithPrefix(prefix: string, source: string): Array<string> {
    let resultArray = Array<string>();
    let possibleSourcePrefix: Array<string> = this.getPrefixs(source);
    let lenb = possibleSourcePrefix.length;
    let counter = 0
    while (counter < lenb) {
      let result = prefix + possibleSourcePrefix[counter];
      console.log("tryCombineWithPrefix substring = " + possibleSourcePrefix[counter]);
      resultArray.push(result);
      counter++;
    }
    return resultArray;
  }

  private getPrefixs(source: string): Array<string> {
    let sourceLen = source.length;
    let counter = 0;
    let resultArray = Array<string>();
    while (counter < sourceLen) {
      let subS = source.substring(counter);
      console.log("getPrefixs substring = " + subS);
      resultArray.push(subS);
      counter++;
    }

    for (let counter = 1; counter <= sourceLen; counter++) {
      let prefix = source.substr(0, counter);
      console.log("getPrefixs substring = " + prefix);
      resultArray.push(prefix);
    }

    resultArray = this.removeDuplicates(resultArray);
    return resultArray;
  }

  shouldShowErrors() {
    return this.isFormError;
  }

  private resetForm() {
    this.listOfGeneratedWords = [];
    this.isFormError = false;
  }

  private removeDuplicates(data: Array<string>) {
    let unique = {};
    data.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });

    return Object.keys(unique);
  }
}
