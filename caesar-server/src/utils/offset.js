class OffsetGenerator {

    /**
     * Az eltolást generáló függvény:
     * @param {} str 
     */
    getOffset(str) {
        var offset = 0;
    
        for (var i = 0; i < str.length; i ++) {
            offset += str.charCodeAt(i);
        }
        
        offset = (offset % 26);
    
        return offset;
    };
  }
  
  module.exports = OffsetGenerator;