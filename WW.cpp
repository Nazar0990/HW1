//Task1
#include <iostream>
using namespace std;

int main() 
{
    cout << "Name: "The war and the peace"
        ";
        cout << "Avtor: L.N. Tolstoj";
        cout << "Izdatelstvo: Piter ";
        cout << "Pages : 500.";
        return 0;
}
//Task2
#include <iostream>
using namespace std;

int main() 
{
    cout << "aaaKraj Lukomor'a dub zelenyj, I zolotyj Lancyuh na nim:";
        cout << "aaaShodnya, shonochi kit uchenyj Na Lancyuhu kruzhl'aje tim";
        return 0;
//Task3
#include <iostream>
using namespace std;

        int main() 
        {
            cout << "
                " << (char)201 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 
                << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205
                << (char)205 << (char)205 << (char)205 << (char)187 << "
                ";

                cout << (char)186 << "    Pory Roku    " << (char)186 << "
                ";

                cout << (char)204 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)202
                << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)202 << (char)205
                << (char)205 << (char)205 << (char)205 << (char)205 << (char)185 << "
                ";

                cout << (char)186 << " Zyma " << (char)179 << " Vesna " << (char)179 << " Lito " << (char)179 << " Osin " << (char)186 << "
                ";

                cout << (char)200 << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)203
                << (char)205 << (char)205 << (char)205 << (char)205 << (char)205 << (char)203 << (char)205
                << (char)205 << (char)205 << (char)205 << (char)205 << (char)188 << "
                ";

                return 0;
        }

//_______________________________________________________________________________
//Task1 

#include <iostream>
using namespace std;

        int main() 
        {
            int year;
            cout << "Enter the year: ";
            cin >> year;
            int days = 365 + ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
            cout << "In " << year << " year = " << days << " days" << endl;
            return 0;
        }

//Task2
#include <iostream>
using namespace std;

        int main() {
            int grn, kop;
            cout << "Enter amount (grn kopeks): ";
            cin >> grn >> kop;
            grn += kop / 100;
            kop = kop % 100;
            cout << "Corrected amount: " << grn << " grn " << kop << " kop" << endl;
            return 0;
        }
//Task3
#include <iostream>
        using namespace std;

        int main() 
        {
            double length, width, height, volume;
            cout << "Calculate volume of parallelepiped.
                ";
                cout << "Enter input data:
                ";
                cout << "Length (cm) -> ";
            cin >> length;
            cout << "Width (cm) -> ";
            cin >> width;
            cout << "Height (cm) -> ";
            cin >> height;
            volume = length * width * height;
            cout << "Volume: " << volume << " cubic cm." << endl;
            return 0;
        }
//Task4
#include <iostream>
        using namespace std;

        int main() 
        {
            double mapScale, distanceCm, distanceKm;
            cout << "Calculate distance between populated points.
                ";
                cout << "Enter input data:
                ";
                cout << "Map scale (km per 1 cm) -> ";
            cin >> mapScale;
            cout << "Distance between points (cm) -> ";
            cin >> distanceCm;
            distanceKm = mapScale * distanceCm;
            cout << "Distance between points: " << distanceKm << " km." << endl;
            return 0;
        }

//Task5
#include <iostream>
using namespace std;

        int main() {
            const double PI = 3.14159265358979323846;
            double radius, volume;
            cout << "Calculate volume of sphere.
                ";
                cout << "Enter radius (cm): ";
            cin >> radius;


            volume = (4.0 / 3.0) * PI * radius * radius * radius;

            cout << "Volume: " << volume << " cubic cm." << endl;
            return 0;
        }