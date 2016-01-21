describe('arabicToRoman', function(){
  it("converts 1 to I", function() {
    expect(arabicToRoman(1)).to.equal("I");
  });

  it("converts 5 to V", function() {
    expect(arabicToRoman(5)).to.equal("V");
  });

  it("converts 10 to X", function() {
    expect(arabicToRoman(10)).to.equal("X");
  });

  it("converts 50 to L", function() {
    expect(arabicToRoman(50)).to.equal("L");
  });

  it("converts 100 to C", function() {
    expect(arabicToRoman(100)).to.equal("C");
  });

  it("converts 500 to D", function() {
    expect(arabicToRoman(500)).to.equal("D");
  });

  it("converts 1000 to M", function() {
    expect(arabicToRoman(1000)).to.equal("M");
  });

  it("appends I to I to equal 2", function() {
    expect(arabicToRoman(2)).to.equal("II");
  });

  it("appends V to I to equal 2", function() {
    expect(arabicToRoman(6)).to.equal("VI");
  });

  it("appends X to I to equal 11", function() {
    expect(arabicToRoman(11)).to.equal("XI");
  });

  it("appends L to I to equal 51", function() {
    expect(arabicToRoman(51)).to.equal("LI");
  });

  it("appends C to I to equal 101", function() {
    expect(arabicToRoman(101)).to.equal("CI");
  });

  it("appends D to I to equal 501", function() {
    expect(arabicToRoman(501)).to.equal("DI");
  });

  it("appends M to I to equal 1001", function() {
    expect(arabicToRoman(1001)).to.equal("MI");
  });



});
