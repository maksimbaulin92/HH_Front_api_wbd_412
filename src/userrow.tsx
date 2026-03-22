import type { UserModel } from "./types";

interface UserRowProps {
  line: number;
  user: UserModel;
  isUserDeleting: boolean;
  isUserSelected: boolean;
  onDeleteClick: (id: number) => void;
  onEditClick: (user: UserModel) => void;
}

export const UserRow = ({
  line,
  user,
  isUserDeleting,
  isUserSelected,
  onDeleteClick,
  onEditClick,
}: UserRowProps) => {
  return (
    <div
      style={{
        backgroundColor: isUserSelected
          ? "rgb(255, 197, 104)"
          : "rgb(241, 241, 241)",
      }}
      className="d-flex flex-row gap-3 p-2 rounded-3 ps-4 justify-content-between"
    >
      <div className="d-flex flex-row gap-2 w-100">
        <span style={{ width: "30px" }}>{line}</span>

        <span className="fw-bold" style={{ width: "250px" }}>
          {user.firstName + " " + user.lastName}
        </span>

        <span style={{ width: "50px" }}>{user.age}</span>

        <span style={{ width: "150px" }}>{user.phone}</span>

        {user.isCitizen ? (
          <span className="text-success text-nowrap">Гражданин РФ</span>
        ) : (
          <span className="text-primary">Иностранец</span>
        )}
      </div>

      {!isUserDeleting && (
        <div
          onClick={() => {
            onEditClick(user);
          }}
          style={{ cursor: "pointer" }}
        >
          ✏️
        </div>
      )}

      {!isUserDeleting && !isUserSelected && (
        <button
          onClick={() => onDeleteClick(user.id)}
          className="btn btn-close"
        ></button>
      )}
    </div>
  );
};
