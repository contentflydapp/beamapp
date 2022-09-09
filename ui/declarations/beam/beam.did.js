export const idlFactory = ({ IDL }) => {
  const EscrowId = IDL.Nat32;
  const Time__1 = IDL.Int;
  const Period = IDL.Nat32;
  const BeamId__1 = IDL.Nat32;
  const ErrorCode = IDL.Variant({
    'invalid_beam' : IDL.Text,
    'beam_notfound' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : BeamId__1, 'err' : ErrorCode });
  const CanisterMemoryInfo = IDL.Record({
    'rts_max_live_size' : IDL.Nat,
    'rts_memory_size' : IDL.Nat,
    'rts_total_allocation' : IDL.Nat,
    'rts_heap_size' : IDL.Nat,
    'rts_reclaimed' : IDL.Nat,
    'rts_version' : IDL.Text,
  });
  const BeamId = IDL.Nat32;
  const BeamStatus__1 = IDL.Variant({
    'active' : IDL.Null,
    'completed' : IDL.Null,
    'paused' : IDL.Null,
  });
  const Time = IDL.Int;
  const EscrowId__1 = IDL.Nat32;
  const BeamReadModel = IDL.Record({
    'id' : BeamId,
    'status' : BeamStatus__1,
    'createdAt' : Time,
    'escrowId' : EscrowId__1,
    'scheduledEndDate' : Time,
    'startDate' : Time,
  });
  const BeamStatus = IDL.Variant({
    'active' : IDL.Null,
    'completed' : IDL.Null,
    'paused' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : BeamStatus, 'err' : ErrorCode });
  return IDL.Service({
    'canisterVersion' : IDL.Func([], [IDL.Nat32], ['query']),
    'createBeam' : IDL.Func([EscrowId, Time__1, Period], [Result_1], []),
    'getActorBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'getCanisterMemoryInfo' : IDL.Func([], [CanisterMemoryInfo], ['query']),
    'getManager' : IDL.Func([], [IDL.Principal], ['query']),
    'healthCheck' : IDL.Func([], [IDL.Bool], ['query']),
    'queryBeamByEscrowIds' : IDL.Func(
        [IDL.Vec(EscrowId)],
        [IDL.Vec(BeamReadModel)],
        ['query'],
      ),
    'stopBeam' : IDL.Func([EscrowId], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };