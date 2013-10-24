/**
 * This is a JSX version of shellinford library:
 * https://code.google.com/p/shellinford/
 *
 * License: http://shibu.mit-license.org/
 */

import "test-case.jsx";
import "burrows-wheeler-transform.jsx";

class _Test extends TestCase
{
    function test_get() : void
    {
        var bwt = new BurrowsWheelerTransform('abracadabra');
        this.expect(bwt.get("$")).toBe("ard$rcaaaabb");
        this.expect(bwt.size()).toBe('abracadabra'.length + 1);
        this.expect(bwt.head()).toBe(3);
    }

    function test_shortcut_method() : void
    {
        var result = BurrowsWheelerTransform.bwt('abracadabra', '$');
        this.expect(result).toBe("ard$rcaaaabb");
    }
}
