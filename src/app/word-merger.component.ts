import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './word-merger.component.html'
})
export class WordMergerComponent implements OnInit {
  word1:String;
  word2:String;
  word3:String;
  word4:String;
  isFormError:boolean = false;
  allowedStringLn:number = 15;
  listOfGeneratedWords = Array<String>();
  constructor() { }

  ngOnInit() {
      this.word1 = "";
      this.word2 = "";
      this.word3 = "";
      this.word4 = "";
  }

  combineWords () {
    this.listOfGeneratedWords = [];
    if (this.word1.length > 10 || this.word2.length > 10 || this.word3.length > 10 || this.word4.length > 10) {
      this.isFormError = true;
    }
    else {
      this.listOfGeneratedWords.push(this.word1);
      this.listOfGeneratedWords.push(this.word2);
      this.listOfGeneratedWords.push(this.word3);
      this.listOfGeneratedWords.push(this.word4);
      let resultArray = Array<String>();
      resultArray = this.tryCombine(this.word1, this.word2);
      console.log("generating words resultArray=" + resultArray.length);
      let removeDuplicates = (names) => names.filter((v,i) => names.indexOf(v) === i)
      removeDuplicates(resultArray);
      this.listOfGeneratedWords = this.listOfGeneratedWords.concat(resultArray);
    }
  }

  private tryCombine(source1:String, source2:String):Array<String> {
    let lena = source1.length; 
    let lenb = source2.length; 
    let resultArray = new Array<String>();
    for (let counter=1; counter<=lena; counter++) {
      console.log("tryCombine " + counter);
      let prefix = source1.substr(0,counter);
      console.log("tryCombine prefix = " + prefix);
      let thisResult:Array<String> =  this.tryCombineWithPrefix(prefix, source2);
      console.log("tryCombine thisResult = " + thisResult);
      resultArray = resultArray.concat(thisResult);
    }
    return resultArray;
  }

  private tryCombineWithPrefix(prefix:String, source2:String):Array<String> {
    let lenb = source2.length; 
    let counter = 0;
    let resultArray = Array<String>();
    while (counter<lenb) {
      let result = prefix + source2.substring(counter);
      resultArray.push(result);
      counter++;
    }
    return resultArray;
  }

  shouldShowErrors () {
    return this.isFormError;
  }
}
