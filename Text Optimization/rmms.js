function rms(text, keywordToRemove) {
    const regex = new RegExp(keywordToRemove, 'g'); // '보우' 단어를 찾는 정규식
    return text.replace(regex, ''); // 해당 단어를 제거하고 반환
  }
  
  // 예시 사용법
  const originalText = "우리나라 보우하세";
  const keywordToRemove = "보우";
  
  const updatedText = rms(originalText, keywordToRemove);
  console.log(updatedText); // "우리나라 하세"
  