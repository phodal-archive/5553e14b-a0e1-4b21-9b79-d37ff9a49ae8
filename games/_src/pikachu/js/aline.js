function findPath(matrix, start, end) {
    // shortcuts for speed
    var abs = Math.abs;
    var max = Math.max;
    var pow = Math.pow;
    var sqrt = Math.sqrt;

    var awidth = matrix[0].length;
    var aheight = matrix.length;
    var asize = awidth * aheight;
    var wall = 0;

    // default: no diagonals (Manhattan)
    var distanceFunction = ManhattanDistance;
    var findNeighbours = function () { }; // empty

    // alternate heuristics, depending on your game:

    // diagonals allowed but no sqeezing through cracks:
    // var distanceFunction = DiagonalDistance;
    // var findNeighbours = DiagonalNeighbours;

    // diagonals and squeezing through cracks allowed:
    // var distanceFunction = DiagonalDistance;
    // var findNeighbours = DiagonalNeighboursFree;

    // euclidean but no squeezing through cracks:
    // var distanceFunction = EuclideanDistance;
    // var findNeighbours = DiagonalNeighbours;

    // euclidean and squeezing through cracks allowed:
    // var distanceFunction = EuclideanDistance;
    // var findNeighbours = DiagonalNeighboursFree;

    // distanceFunction functions
    // these return how far away a point is to another

    function ManhattanDistance(Point, Goal) {	// linear movement - no diagonals - just cardinal directions (NSEW)
        return abs(Point.x - Goal.x) + abs(Point.y - Goal.y);
    }

    function DiagonalDistance(Point, Goal) {	// diagonal movement - assumes diag dist is 1, same as cardinals
        return max(abs(Point.x - Goal.x), abs(Point.y - Goal.y));
    }

    function EuclideanDistance(Point, Goal) {	// diagonals are considered a little farther than cardinal directions
        // diagonal movement using Euclide (AC = sqrt(AB^2 + BC^2))
        // where AB = x2 - x1 and BC = y2 - y1 and AC will be [x3, y3]
        return sqrt(pow(Point.x - Goal.x, 2) + pow(Point.y - Goal.y, 2));
    }

    // returns every available North East, South East,
    // South West or North West cell - no squeezing through
    // "cracks" between two diagonals
    function DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result) {
        if (myN) {
            if (myE && isAvailable(E, N))
                result.push({ x: E, y: N });
            if (myW && isAvailable(W, N))
                result.push({ x: W, y: N });
        }
        if (myS) {
            if (myE && isAvailable(E, S))
                result.push({ x: E, y: S });
            if (myW && isAvailable(W, S))
                result.push({ x: W, y: S });
        }
    }

    // returns every available North East, South East,
    // South West or North West cell including the times that
    // you would be squeezing through a "crack"
    function DiagonalNeighboursFree(myN, myS, myE, myW, N, S, E, W, result) {
        myN = N > -1;
        myS = S < aheight;
        myE = E < awidth;
        myW = W > -1;
        if (myE) {
            if (myN && isAvailable(E, N))
                result.push({ x: E, y: N });
            if (myS && isAvailable(E, S))
                result.push({ x: E, y: S });
        }
        if (myW) {
            if (myN && isAvailable(W, N))
                result.push({ x: W, y: N });
            if (myS && isAvailable(W, S))
                result.push({ x: W, y: S });
        }
    }

    // returns boolean value (world cell is available and open)
    function isAvailable(x, y) {
        return ((matrix[x] != null) &&
            (matrix[x][y] != null) &&
            (matrix[x][y] <= wall));
    };

    // Neighbours functions, used by findNeighbours function
    // to locate adjacent available cells that aren't blocked

    // Returns every available North, South, East or West
    // cell that is empty. No diagonals,
    // unless distanceFunction function is not Manhattan
    function getNeighbor(x, y) {
        var N = y - 1,
            S = y + 1,
            E = x + 1,
            W = x - 1,
            myN = N > -1 && isAvailable(x, N),
            myS = S < aheight && isAvailable(x, S),
            myE = E < awidth && isAvailable(E, y),
            myW = W > -1 && isAvailable(W, y),
            result = [];
        if (myN)
            result.push({ x: x, y: N });
        if (myE)
            result.push({ x: E, y: y });
        if (myS)
            result.push({ x: x, y: S });
        if (myW)
            result.push({ x: W, y: y });
        findNeighbours(myN, myS, myE, myW, N, S, E, W, result);
        return result;
    }

    // Node function, returns a new object with Node properties
    // Used in the calculatePath function to store route costs, etc.
    function node(parent, point) {
        var _node = {
            parent: parent,
            // array index of this Node in the world linear array
            value: point.x + (point.y * awidth),
            // the location coordinates of this Node
            x: point.x,
            y: point.y,
            // the heuristic estimated cost
            // of an entire path using this node
            f: 0,
            // the distanceFunction cost to get
            // from the starting point to this node
            g: 0
        };

        return _node;
    }

    function calculatePath() {
        var pstart = node(null, start);
        var pend = node(null, end);
        var AStar = new Array(asize);
        var AOpen = [pstart];
        var AClosed = [];
        var result = [];
        var currentNeighbor;
        var currentNode;
        var tempPath;
        var length, max, min, i, j;
        while (length = AOpen.length) {
            max = asize;
            min = -1;
            for (i = 0; i < length; i++) {
                if (AOpen[i].f < max) {
                    max = AOpen[i].f;
                    min = i;
                }
            }
            currentNode = AOpen.splice(min, 1)[0];
            if (currentNode.value === pend.value) {
                tempPath = AClosed[AClosed.push(currentNode) - 1];
                do {
                    result.push([tempPath.x, tempPath.y]);
                }
                while (tempPath = tempPath.Parent);
                AStar = AClosed = AOpen = [];
                result.reverse();
            } else {
                currentNeighbor = getNeighbor(currentNode.x, currentNode.y);
                for (i = 0, j = currentNeighbor.length; i < j; i++) {
                    tempPath = node(currentNode, currentNeighbor[i]);
                    if (!AStar[tempPath.value]) {
                        tempPath.g = currentNode.g + distanceFunction(currentNeighbor[i], currentNode);
                        tempPath.f = tempPath.g + distanceFunction(currentNeighbor[i], pend);
                        AOpen.push(tempPath);
                        AStar[tempPath.value] = true;
                    }
                }
                AClosed.push(currentNode);
            }
        }
        result = removeZigZag(result, 11);
        return result;
    }

    return calculatePath();
}

function removeZigZag(currentPath, lookahead) {
    for (var i = 0; i < currentPath.length; i++) {
        var toBeStraightened = [];
        for (var j = i; j < lookahead + i + 1 && j < currentPath.length; j++) {
            var startIndexToStraighten = i;
            var endIndexToStraighten = i + 1;
            if (((currentPath[i][0] == currentPath[j][0] && currentPath[i][1] != currentPath[j][1]) || (currentPath[i][1] == currentPath[j][1] && currentPath[i][0] != currentPath[j][0]))) {
                endIndexToStraighten = j;
                for (var k = startIndexToStraighten; k <= endIndexToStraighten; k++) {
                    toBeStraightened.push(currentPath[k]);
                }
                i = endIndexToStraighten - 1;
                break;
            }
        }
        if ((toBeStraightened.length >= 3 && !formsALine(toBeStraightened) && !lineWillGoThroughObstacles(currentPath[startIndexToStraighten], currentPath[endIndexToStraighten]))) {
            console.log(toBeStraightened)
            straightenLine(currentPath, startIndexToStraighten, endIndexToStraighten);
        }
    }
    return currentPath;
}

function straightenLine(currentPath, fromIndex, toIndex) {
    for (var l = fromIndex; l <= toIndex; l++) {
        if (currentPath[fromIndex][0] == currentPath[toIndex][0]) {
            currentPath[l][0] = currentPath[fromIndex][0];
        } else if (currentPath[fromIndex][1] == currentPath[toIndex][1]) {
            currentPath[l][1] = currentPath[fromIndex][1];
        }
    }
}

function lineWillGoThroughObstacles(point1, point2) {
    var minX = Math.min(point1[0], point2[0]);
    var maxX = Math.max(point1[0], point2[0]);
    var minY = Math.min(point1[1], point2[1]);
    var maxY = Math.max(point1[1], point2[1]);
    if (point1[1] == point2[1]) {
        for (var i = minX; i <= maxX && i < worldWidth; i++) {
            if (world[i][point1[1]] == 1) {
                return true;
            }
        }
    }
    if (point1[0] == point2[0]) {
        for (var i = minY; i <= maxY && i < worldHeight; i++) {
            if (world[point1[0]][i] == 1) {
                return true;
            }
        }
    }
    return false;
}

function formsALine(pointsArray) {
    if (!pointsArray || (pointsArray && pointsArray.length < 1)) {
        return false;
    }
    var firstX = pointsArray[0][1];
    var lastX = pointsArray[pointsArray.length - 1][1];
    var firstY = pointsArray[0][0];
    var lastY = pointsArray[pointsArray.length - 1][0];
    if (firstX == lastX) {
        for (var i = 0; i < pointsArray.length; i++) {
            if (pointsArray[i][1] != firstX) {
                return false;
            }
        }
        return true;
    } else if (firstY == lastY) {
        for (var i = 0; i < pointsArray.length; i++) {
            if (pointsArray[i][0] != firstY) {
                return false;
            }
        }
        return true;
    }
    return false;
}