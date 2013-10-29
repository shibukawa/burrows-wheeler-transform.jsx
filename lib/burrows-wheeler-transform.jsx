import "sais.jsx";

__export__ class BurrowsWheelerTransform
{
    static var END_MARKER = String.fromCharCode(0);

    var _str : string;
    var _size : int;
    var _head : int;
    var _suffixarray : int[];

    function constructor (str : string)
    {
        var str2 = str + BurrowsWheelerTransform.END_MARKER;
        this._str = str2;
        this._size = this._str.length;
        this._suffixarray = SAIS.make(str2);
        this._head = this._suffixarray.indexOf(0);
    }

    function size () : int
    {
        return this._size;
    }

    function head () : int
    {
        return this._head;
    }

    function clear () : void
    {
        this._str = "";
        this._size = 0;
        this._head = 0;
        this._suffixarray.length = 0;
    }

    function getChar (i : int) : string
    {
        var size = this.size();
        if (i >= size)
        {
            throw new Error("BurrowsWheelerTransform.get() : range error");
        }
        var index = (this._suffixarray[i] + size - 1) % size;
        return this._str.charAt(index);
    }

    __noexport__ function get () : string
    {
        return this.get(null);
    }

    function get (replace : Nullable.<string>) : string
    {
        var result = '';
        var size = this.size();
        for (var i = 0; i < size; i++)
        {
            result += this.getChar(i);
        }
        if (replace != null)
        {
            return result.replace(BurrowsWheelerTransform.END_MARKER, replace);
        }
        else
        {
            return result;
        }
    }

    static function bwt(src : string, endMarker : Nullable.<string>) : string
    {
        var bwt = new BurrowsWheelerTransform(src);
        return bwt.get(endMarker);
    }
}

