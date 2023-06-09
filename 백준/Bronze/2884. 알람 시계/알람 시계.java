import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int H, M;
		H = scan.nextInt();
		M = scan.nextInt();
		if(H==0) {
			if(M<45) {
				H = 23; M = M+60-45;
				System.out.println(H+" "+M);
			}
			else if(M>=45) {
				M = M -45;
				System.out.println(H+" "+M);
			}
		}
		else if(H>0) {
			if(M<45) {
				H = H-1; M=M+60-45;
				System.out.println(H+" "+M);
			}
			else if(M>=45) {
				M = M - 45;
				System.out.println(H+" "+M);
			}
		}
		scan.close();
	}
}
